const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email.value.trim())){
     showSuccess(email);
    }else{
      showError(email,'Email is Not Valid');
    }
};
const BothpasswordCheak = (p,p2)=>{
       if(p.value!==p2.value){
        showError(p2,`Password do not march `)
       }
}

const getFieldName = (item) => {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
};
const cheakRequired = (inputArr) => {
  inputArr.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} not more then ${max}`);
  } else {
  }
};

form.addEventListener("click", function (e) {
  e.preventDefault();

  /*------------------ way 1----------------
  if (username.value === "") {
    showError(username, "User Name is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Email is Not Valid ! Try again");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Required is required again");
  } else {
    showSuccess(password2);
  }
  */

  //   way 2

  cheakRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  validateEmail(email);
  BothpasswordCheak(password,password2);
});
