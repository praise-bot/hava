//login functionality

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector(".login-form");

login.addEventListener("submit",function(evt){
    evt.preventDefault();
    let student_email = email.value;
    let student_pass = password.value;

    //use the localstorage/sessionstorage to save the user information
    if(student_email !="" && student_pass !=""){
        localStorage.setItem("loggedin_user", student_email);
      //redirect user to user dashboard
      location.href = "afterDckeylogin.html"
    }
    //afterDCEkeylogin.html

})
