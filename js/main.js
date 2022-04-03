console.log('working');

let error = document.querySelector('.email-error');


function validation (){
let email = document.getElementById('email').value;
let error = document.querySelectorAll('.email-error');

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (email.match(pattern)){
    error.classList.add("hide");
    }

else{
    error.classList.remove("hide");
}
}


validation();



