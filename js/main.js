const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
const projectsContainer = document.getElementById('projects-container');


// 1. Definimos la función que crea el HTML de cada tarjeta
const createProjectCard = (project) => {
    // Detectamos si ya estamos dentro de la carpeta 'pages'
    const isInsidePages = window.location.pathname.includes('/pages/'); // true si estamos en /pages/project.html
    const basePath = isInsidePages ? "./project.html" : "./pages/project.html"; // Ternario para determinar la ruta base con true o false

    return `
        <article class="project-card">
            <img src="${project.image}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${basePath}?id=${project.uuid}">Learn more</a>
            </div>
        </article>
    `;
};

const projectDetailsContainer = document.getElementById('project-details');

const createProjectDetail = (project) => {
    return `
        <section class="project-detail">
            <div class="container">
                
                <div class="project-header">
                    <h1>${project.name}</h1>
                    <div>
                        <p class="project-tagline">${project.description}</p>
                        <p class="project-date">${project.completed_on}</p>
                    </div>
                </div>
                
                <img src="${project.image}" alt="${project.name}" class="project-main-image">
                
                <div class="project-content">
                    <p>${project.content}</p>
                </div>
            </div>
        </section>
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

async function loadProjectDetail() {
    try {
        const response = await fetch(API_URL);
        const projects = await response.json();
        
        const project = projects.find(p => p.uuid === window.location.search.split('=')[1]);
        
        if (!project) {
            projectDetailsContainer.innerHTML = '<p>Proyecto no encontrado.</p>';
            return;
        }
        
        projectDetailsContainer.innerHTML = createProjectDetail(project);
        
        
    } catch (error) {
        console.error('Error cargando proyecto:', error);
        projectDetailsContainer.innerHTML = '<p>Error al cargar el proyecto. Inténtalo más tarde.</p>';
    }
}


// 3. Ejecutamos
loadProjects();
const isInsidePagesRenderContent = window.location.pathname.includes('/pages/'); //Controlo los Errores de ruta para que no se ejecute en todas las PAGES 
if (isInsidePagesRenderContent) {
    loadProjectDetail();
}



