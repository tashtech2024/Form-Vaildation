console.log('Running....');
const form = document.getElementById("registration");
const email = document.getElementById["email"];
const password = document.getElementById["password"];
// const email = form.elements["email"];

// function validate(event) {
//     const nameVal = validateName();
//     if (nameVal === false) {
//       evt.returnValue = false;
//       return false;

// form.addEventListener("register", validate);
// form.addEventListener("login", validate);
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
      return false;
    }
  
    return emailVal;
  }
//   Password : Toggle Password Visibility
  function toggleVisibility() {  
    var getPasword = document.getElementById("password");  
    if (getPasword.type === "password") {  
      getPasword.type = "text";  
    } else {  
      getPasword.type = "password";  
    }  
  }  