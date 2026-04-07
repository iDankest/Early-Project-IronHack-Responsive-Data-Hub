const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
const projectsContainer = document.getElementById('projects-container');

// 1. Definimos la función que crea el HTML de cada tarjeta
const createProjectCard = (project) => {
    return `
        <article class="project-card">
            <img src="${project.image}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="./project.html?id=${project.uuid}">Learn more</a>
            </div>
        </article>
    `;
};

// 2. Función principal para obtener y pintar los datos
async function loadProjects() {
    try {
        const response = await fetch(API_URL);
        const projects = await response.json();
        
        
        const projectsToShow = projects.slice(1, 4).reverse();
        
        // Metemos el HTML dentro del contenedor
        projectsContainer.innerHTML = projectsToShow.map(project => createProjectCard(project)).join('');
        
    } catch (error) {
        console.error('Error cargando proyectos:', error);
        projectsContainer.innerHTML = '<p>Error al cargar los proyectos. Inténtalo más tarde.</p>';
    }
}

// 3. Ejecutamos
loadProjects();