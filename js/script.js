// alert("hello")
const pwdField = document.querySelector("#login-pwd");
const pwdbtn = document.querySelector('.pwdbtn');

pwdbtn.addEventListener("click", function() {
    if(pwdField.type == 'password') {
        pwdField.type = 'text';
        pwdbtn.textContent = 'Hide';
    } else {
        pwdField.type = 'password';
        pwdbtn.textContent = 'Show';
    }
});