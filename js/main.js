console.log('working');




function validation(){
let email = document.getElementById('email').value;
let error = document.querySelectorAll('.email-error');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(pattern)){
    error.classList.add("hide");
    console.log('does not match');
}

else{
    error.classList.remove("hide");
    console.log('match');
}

}






