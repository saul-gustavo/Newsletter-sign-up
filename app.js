const gracias = document.querySelector('.message');
const btnSubmit = document.querySelector('.submit');
const signUp = document.querySelector('.sing-up');
const error = document.querySelector('.error');
const btnRefres = document.querySelector('.btn-message');


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const correo = document.querySelector('.email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value === '' || !emailRegex.test(correo.value)) {
        correo.classList.add('box');
        error.style.display = "block";
    } else {
        correo.classList.remove('box');
        error.style.display = "none";
        gracias.style.display = "block"
        signUp.style.display = "none"
    }
})

btnRefres.addEventListener('click', () => {
    location.reload();
})


