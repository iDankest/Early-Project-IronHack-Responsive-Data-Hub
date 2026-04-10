const nav = document.querySelector('nav');
const abrir = document.getElementById('menu-burger');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
    abrir.style.display = 'none';
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
    abrir.style.display = 'block';
});
