console.log('working');
//selecting the html form
const form = document.querySelectorAll(form)[0];
//selecting the html email block
const email = document.getElementById('mail');
//selecting error message the will apper if invalid email
const errorMessage = document.querySelector('.error-message');




email.addEventListener('input', function(event){

    if(!email.validity.valid){
        errorMessage.classList.add('hide');
)}