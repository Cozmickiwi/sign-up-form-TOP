//password checker
//store first password input in a variable, and second password in another
//compare the two variables and if they arent the same, display a message

let password1 = document.getElementById('pwd');
let password2 = document.getElementById('confirmPwd');
let subButton = document.getElementById('subButton');

subButton.addEventListener('click', () => {
    if(password1.value != password2.value){
        password2.setCustomValidity('Passwords do not match');
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        
    }
})