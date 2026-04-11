# 🌐 Circle — Early Project IronHack

![Status](https://img.shields.io/badge/Status-In%20Development-green)
![Stack](https://img.shields.io/badge/Stack-HTML5%20|%20CSS3%20|%20JavaScript%20ES6+-blue)
![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)
![Bootcamp](https://img.shields.io/badge/Bootcamp-Ironhack-FF4F64)

> Proyecto final de la primera fase del Bootcamp de **Ironhack**. Una plataforma web responsive para un estudio de diseño digital, con consumo de API interna, validación de formularios y navegación dinámica.

🔗 **Demo en vivo:** [cicle-design.netlify.app](https://cicle-design.netlify.app/)  
📁 **Repositorio:** [github.com/iDankest/Early-Project-IronHack-Responsive-Data-Hub](https://github.com/iDankest/Early-Project-IronHack-Responsive-Data-Hub)

---

## 📋 Descripción

**Circle** es un sitio web para un estudio de diseño y desarrollo digital. El proyecto simula una arquitectura de *Data Hub* donde los contenidos (proyectos, servicios, testimonios) se renderizan dinámicamente desde un JSON interno mediante `fetch`, sin escribir HTML estático. El usuario puede navegar entre vistas de detalle de cada proyecto, contactar a través de un formulario validado y explorar el sitio desde cualquier dispositivo.

---

## 🗂️ Estructura del Proyecto

```
Early-Project-IronHack/
│
├── index.html                  # Página principal
│
├── pages/
│   ├── contact.html            # Página de contacto con formulario
│   └── project-detail.html     # Vista de detalle de proyecto
│
├── Assets/
│   ├── logos/                  # Logos de clientes y favicon
│   ├── hero-section/           # Imágenes del hero
│   ├── services-section/
│   │   └── icons/              # Iconos de servicios
│   ├── testimonial-section/    # Fotos de perfil y memojis
│   └── newsletter/
│       └── icon/               # Icono de mail
│
├── js/
│   ├── main.js                 # Lógica principal: fetch, render de tarjetas
│   ├── burger.js               # Menú hamburguesa (mobile)
│   └── contact.js              # Validación del formulario de contacto
│
├── db/
│   └── data.json               # API interna con proyectos y datos
│
└── style.css                   # Estilos globales + responsive
```

---

## 🛠️ Características Principales

- **Inyección dinámica de datos** — Consumo de `data.json` mediante `fetch` para renderizar tarjetas de proyectos sin HTML estático.
- **Vista de detalle** — Navegación por parámetros de URL (`?id=`) para mostrar la información específica de cada proyecto.
- **Responsive design** — Menú hamburguesa con animación slide-in, overlay y transiciones suaves. Layout adaptado a móvil, tablet y escritorio.
- **Validación de formulario** — Feedback visual en tiempo real con regex específicas por campo (nombre, email, teléfono, mensaje), mensajes de error descriptivos y estados `valido`/`invalido` con glow en el borde.
- **CSS custom properties** — Sistema de diseño con variables de color, tipografía y espaciado reutilizables.

---

## 💻 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5 Semántico** | Estructura accesible y bien jerarquizada |
| **CSS3** | Variables, Flexbox, Grid, animaciones, media queries |
| **JavaScript ES6+** | DOM, Fetch API, eventos, regex, arrow functions |
| **JSON** | API interna simulada como fuente de datos |
| **Git & GitHub** | Control de versiones y repositorio remoto |
| **Netlify** | Despliegue continuo desde GitHub |
| **Figma** | Prototipado y sistema de diseño visual |
| **Gemini & Claude** | Apoyo en debugging, estructura de código y decisiones técnicas |

---

## 🚧 Principales Puntos de Conflicto y Soluciones

**1. Renderizado dinámico sin frameworks**  
Renderizar tarjetas desde JSON usando solo JS vanilla fue el primer reto real. La solución fue construir una función que genera `innerHTML` a partir de los datos del fetch y la inserta en el contenedor del DOM.

**2. Navegación a vista de detalle**  
Pasar datos entre páginas sin backend ni localStorage requirió usar parámetros en la URL (`?id=1`) y leerlos con `URLSearchParams` en la página de detalle para hacer un segundo fetch y filtrar el proyecto correcto.

**3. Validación con feedback específico por campo**  
El primer enfoque devolvía solo `true/false`. Se refactorizó para que cada función de validación devuelva un objeto `{ valido, mensaje }`, permitiendo mostrar mensajes descriptivos como *"Falta la @ — ejemplo@email.com"* en lugar de un genérico *"Campo obligatorio"*.

**4. Menú hamburguesa en mobile**  
El uso de `position: absolute` hacía que el menú no cubriera toda la pantalla y la X desaparecía al ocultarse el nav. La solución fue `position: fixed` con `height: 100vh`, un overlay independiente y mover el botón de cerrar fuera del nav en el HTML.

**5. Scoping de event listeners**  
Al aplicar listeners dentro de bucles `forEach`, los eventos se comportaban de forma inesperada. Se resolvió entendiendo que cada iteración crea su propio scope y usando `event.currentTarget` cuando fue necesario.

---

## ✅ Checklist de Mejoras Pendientes

- [ ] Añadir animación de entrada a las tarjetas de proyectos (Intersection Observer)
- [ ] Mejorar accesibilidad: atributos `aria-label` en botones y nav
- [ ] Añadir página 404 personalizada en Netlify
- [ ] Conectar el formulario a un servicio real (Formspree / Netlify Forms)
- [ ] Mejorar el SEO: meta tags, og:image, descripción
- [ ] Modo oscuro con CSS custom properties
- [ ] Añadir transición suave entre páginas

---

## 🚀 Instalación en Local

```bash
# 1. Clona el repositorio
git clone https://github.com/iDankest/Early-Project-IronHack-Responsive-Data-Hub.git

# 2. Entra en la carpeta
cd Early-Project-IronHack-Responsive-Data-Hub

# 3. Ábrelo con Live Server (VS Code) o abre index.html directamente en el navegador
```

> ⚠️ El fetch a `data.json` requiere un servidor local para funcionar correctamente. Se recomienda la extensión **Live Server** de VS Code.

---

## 👤 Autor

**Kilian** — Estudiante en Ironhack  
GitHub: [@iDankest](https://github.com/iDankest)