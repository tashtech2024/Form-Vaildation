console.log('Running....');
const form = document.getElementById("registration");
const email = document.getElementById["email"];
const password = document.getElementById["password"];
const login = document.getElementById["login"];

//? ===========Email=======?//

function validateEmail() {
    let emailVal = email.value;
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol, which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
    evt.returnValue = false;
    return false;
  }
  }
  console.log(validateEmail);

//?   Password : Toggle Password Visibility//
  function toggleVisibility() {  
    const getPasword = document.getElementById("password");  
    if (getPasword.type === "password") {  
      getPasword.type = "text";  
    } else {  
      getPasword.type = "password";  
    }  
  }  
  console.log(toggleVisibility);


confirm_password = document.getElementById("confirm_password");

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Passwords Don't Match");
} else {
  confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
  
// * Sumbit sucess fuction //
const alertSumbit = document.getElementById("sumbit");

window.addEventListener("submit-form-success-form1", function () {
  alertSumbit.style.display = "block";
  setTimeout(function() {
    alertbox1.style.display = "none";
  }, 6000);
});
console.log(alertSumbit);

