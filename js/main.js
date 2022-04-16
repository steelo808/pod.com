console.log('working');




function validation(){
let email = document.getElementById('email').value;
let error = document.querySelectorAll('.email-error');
let pattern = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61})$/;

if(!email.match(pattern)){
    error.classList.add("hide");
    console.log('does not match');
}

else{
    error.classList.remove("hide");
    console.log('match');
}

}






