const form = document.getElementById('form');

function fundForm() {
    if(!form) {
        console.error('⛔ No se encuentra el Fomulario')
    }
    
    console.log('✅ Formulario encontrado')
}

//Funcion que recoje todos los valores y los muestra en consola
function inputValuesALL(){
    const inputs = document.querySelectorAll('input, textarea')
    inputs.forEach((input) => {
      const inputValue = input.value
      if (inputValue === "") {
            console.log(`¡El campo ${input.getAttribute('name')} está vacío!`);
        } else {
            console.log(`Todo correcto con: ${input.getAttribute('name')} - ${inputValue}`);
        }
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    inputValuesALL();
});

fundForm()
