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
    if (input.value.trim() === "") {
        input.style.border = '4px solid red';
        input.nextElementSibling.style.display = 'block';
    } else {
        input.style.border = '4px solid green';
        input.nextElementSibling.style.display = 'none';
    }
};

// 2. Aplicamos la lógica a cada input
inputs.forEach((input) => {
    // Cuando el usuario hace clic o entra (foco)
    input.addEventListener('focus', () => validateInput(input));

    // Mientras el usuario escribe
    input.addEventListener('input', () => validateInput(input));
});
}
}


validateFormStyle();
fundForm()
