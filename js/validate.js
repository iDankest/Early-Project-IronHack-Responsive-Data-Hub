const form = document.getElementById('form');

function validateForm() {
    if(!form) {
        console.error('⛔ No se encuentra el Fomulario')
    }
    
    console.log('✅ Formulario encontrado')
}

validateForm()