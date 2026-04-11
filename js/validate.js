const form = document.getElementById('form');
const inputs = document.querySelectorAll('input, textarea')

function fundForm() {
    if(!form) {
        console.error('⛔ No se encuentra el Fomulario')
    }
    
    console.log('✅ Formulario encontrado')
}

//Funcion que recoje todos los valores y los muestra en consola
function inputValuesALL(){
    inputs.forEach((input) => {
      const inputValue = input.value
      if (inputValue === "") {
            console.log(`¡El campo ${input.getAttribute('name')} está vacío!`);
        } else {
            console.log(`Todo correcto con: ${input.getAttribute('name')} - ${inputValue}`);
        }
    })
}


function validateFormStyle(){
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    inputValuesALL();
});
{
// 1. Creamos la lógica de validación
const validateInput = (input) => {
    const value = input.value;
    const name = input.getAttribute('name');

    let isValid = false;

    if(name === 'email')    isValid = validateEmail(value);
    else if(name === 'name')     isValid = validateName(value);
    else if(name === 'phone')    isValid = validatePhone(value);
    else if(name === 'message')  isValid = validateMessage(value);

// Esto va UNA sola vez, fuera de todos los if
    input.classList.toggle('valido', isValid);
    input.classList.toggle('invalido', !isValid);
    input.nextElementSibling.style.display = isValid ? 'none' : 'block';
    
    return isValid;
};

// 2. Aplicamos la lógica a cada input
inputs.forEach((input) => {
    // Cuando el usuario hace clic o entra (foco)
    input.addEventListener('focus', () => {
        const isValid = validateInput(input);
        console.log(`Validación de ${input.getAttribute('name')}:`, isValid);
    });

    // Mientras el usuario escribe
    input.addEventListener('input', () => {
        const isValid = validateInput(input);
        console.log(`Validación de ${input.getAttribute('name')}:`, isValid);
    });
});
}
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if(name.length < 2) {
        return false;
    }
    return nameRegex.test(name);
}
function validatePhone(phone) {
    const phoneRegex = /^\d{9}$/;
    if(phone.length !== 9) {
        return false;
    }
    return phoneRegex.test(phone);
}
function validateMessage(message) {
    const messageRegex = /^[a-zA-Z0-9\s]+$/;
    if (message.length < 10) {
        return false;
    }
    return messageRegex.test(message);
}


validateFormStyle();
fundForm()
