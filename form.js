const password2 = document.getElementById('pass');
const icon = document.getElementById('icon');
const password1 = document.getElementById('passco');
const icon2 = document.getElementById('icon2');

function s(){
      if(password2.type === "password"){
           password2.setAttribute('type','text');
           icon.classList.add('hide');
      }else{
          password2.setAttribute('type','password');
          icon.classList.remove('hide');
      }
}

function ss(){
    if(password1.type === "password"){
         password1.setAttribute('type','text');
         icon2.classList.add('hide');
    }else{
        password1.setAttribute('type','password');
        icon2.classList.remove('hide');
    }
}

//----------------------------------------------------------

const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const passwordConfirmation = document.getElementById("passco");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
  
    if (usernameValue === "") {
      setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(username);
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
  
    const formControls = form.querySelectorAll(".form");
    const formIsValid = [...formControls].every((form) => {
      return form.className === "form success";
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
    formControl.className = "form error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form success";
  }
  
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

/*---------------------------------------------------------------------*/

const esfera = document.querySelector('.esfera');
const formulario = document.querySelector('.formulario');
const hj = document.querySelector('.hj');
const hr = document.querySelector('.hr');
esfera.onclick = function(){
    this.classList.toggle('active');
    formulario.classList.toggle('active');
    hj.classList.toggle('active');
    hr.classList.toggle('active');
}

