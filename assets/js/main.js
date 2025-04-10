document.addEventListener('DOMContentLoaded', function () {
  
    const formContainer = document.querySelector(".form__container");
    const formMailError = document.querySelector('.form__mail-error');
    const formInput = document.querySelector('.form__input');
    const buttonSuccess = document.querySelector('.buttons__message');
    const layoutForm = document.querySelector('.layout')
    const layoutSuccess = document.querySelector('.layout__success')
    const validMailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
 

    formInput.addEventListener('input', () => {
        formMailError.style.display = "none"; 
        formInput.classList.remove('form__input-error');
    });

    formContainer.addEventListener('submit', function (event) {
       event.preventDefault();

        if (!validMailRegex.test(formInput.value)) {

            formMailError.style.display = "block"; 
            formInput.classList.add('form__input-error');
            formInput.value = '';

        } else {
            
            formMailError.style.display = "none";
            formInput.classList.remove('form__input-error');
            layoutForm.classList.add('display-none');
            layoutSuccess.classList.remove('display-none');   
            layoutSuccess.classList.add('layout__success--visible');
        }
    }); 

    buttonSuccess.addEventListener('click', () => {
        layoutSuccess.classList.remove('layout__success--visible');
        layoutSuccess.classList.add('display-none');   
        layoutForm.classList.remove('display-none');
        formContainer.submit(); 
        formInput.value = '';
    });
    
});
