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

    const validationResult = typeof isValid === 'object' ? isValid : {valido: isValid, mensaje: ''};
    input.classList.toggle('valido', validationResult.valido);
    input.classList.toggle('invalido', !validationResult.valido);
    input.nextElementSibling.style.display = validationResult.valido ? 'none' : 'block';
    input.nextElementSibling.textContent = validationResult.mensaje;
    return validationResult;
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
    if (email === "") return {valido: false, mensaje: "El email es obligatorio"};
    if (!email.includes("@")) return {valido: false, mensaje: "Falta el @ - ejemplo@email.com"}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
    ? {valido: true, mensaje: ""}
    : {valido: false, mensaje: "El email no es válido - ejemplo@email.com"};
}
function validateName(name) {
    if (name === "") return {valido: false, mensaje: "El nombre es obligatorio"};
    const nameRegex = /^[a-zA-Z\s]+$/;
    if(name.length < 2) {
        return {valido: false, mensaje: "El nombre debe tener al menos 2 caracteres"};
    }
    return nameRegex.test(name)
    ? {valido: true, mensaje: ""}
    : {valido: false, mensaje: "El nombre solo letras, sin numeros"};
}
function validatePhone(phone) {
    if (phone === "") return {valido: false, mensaje: "El teléfono es obligatorio"};
    const phoneRegex = /^\d{9}$/;
    if(phone.length !== 9) {
        return {valido: false, mensaje: "El teléfono debe tener 9 dígitos"};
    }
    return phoneRegex.test(phone)
    ? {valido: true, mensaje: ""}
    : {valido: false, mensaje: "El teléfono solo números, sin espacios"};
}
function validateMessage(message) {
    if (message === "") return {valido: false, mensaje: "El mensaje es obligatorio"};
    const messageRegex = /^[a-zA-Z0-9\s]+$/;
    if (message.length < 10) {
        return {valido: false, mensaje: "El mensaje debe tener al menos 10 caracteres"};
    }
    return messageRegex.test(message)
    ? {valido: true, mensaje: ""}
    : {valido: false, mensaje: "Sin caracteres especiales"};
}


validateFormStyle();
fundForm()
