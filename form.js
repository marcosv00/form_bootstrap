// Inicio Mostrar e ocultar senha
const password1 = document.getElementById('password');
const icon1 = document.getElementById('icon1');
const password2 = document.getElementById('passwordConfirmation');
const icon2 = document.getElementById('icon2');

function ocultarSenha1(){
      if(password1.type === "password"){
           password1.setAttribute('type','text');
           icon1.classList.add('hide');
      }else{
          password1.setAttribute('type','password');
          icon1.classList.remove('hide');
      }
}

function ocultarSenha2(){
    if(password2.type === "password"){
         password2.setAttribute('type','text');
         icon2.classList.add('hide');
    }else{
        password2.setAttribute('type','password');
        icon2.classList.remove('hide');
    }
}
// Fim mostrar e ocultar senha

// imicio validações dos inputs do formulaio html
const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs() {
    const usernameValue = nome.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
  
    if (usernameValue === "") {
      setErrorFor(nome, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(nome);
    }
  
    if (emailValue === "") {
      setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
    } else {
      setSuccessFor(email);
    }
  
    if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
      setSuccessFor(password);
    }
  
    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
      setSuccessFor(passwordConfirmation);
    }
  
    const formControls = form.querySelectorAll(".divInput");
    const formIsValid = [...formControls].every((form) => {
      return form.className === "divInput success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "divInput error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "divInput success";
  }
  
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
// fim validações dos inputs do formulario html

// inicio modo dark
const esfera = document.querySelector('.esfera');
const formulario = document.querySelector('.formulario');
const enviar = document.querySelector('.enviar');
const hr = document.querySelector('.hr');

esfera.onclick = function(){
    this.classList.toggle('active');
    formulario.classList.toggle('active');
    enviar.classList.toggle('active');
    hr.classList.toggle('active');
}
// fim modo dark
