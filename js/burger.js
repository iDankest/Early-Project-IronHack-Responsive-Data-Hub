const nav = document.querySelector('nav');
const abrir = document.getElementById('menu-burger');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
    abrir.style.display = 'none';
    cerrar.style.display = 'block';   // aparece donde estaba el hamburger
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
    abrir.style.display = 'block';
    cerrar.style.display = 'none';
});

// Bonus: cerrar al hacer click en el overlay
// overlay.addEventListener('click', () => {
//     cerrar.click();
// });