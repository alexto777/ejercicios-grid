// /main.js

/**
 * Función para cargar un componente HTML en un elemento específico.
 * @param {string} selector - Selector del elemento donde se insertará el componente.
 * @param {string} url - Ruta del archivo HTML del componente.
 */
async function loadComponent(selector, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`No se pudo cargar ${url}`);
        }
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Función para inicializar los componentes en la página.
 * @param {string} pageTitle - Título que se mostrará en el header.
 */
async function initializeComponents(pageTitle) {
    // Cargar el header
    await loadComponent('header', 'components/header.html');
    
    // Establecer el título dinámicamente
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) {
        headerTitle.textContent = pageTitle;
    }

    // Cargar el footer
    await loadComponent('footer', 'components/footer.html');
}

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el título de la página desde un atributo data-title en el body
    const pageTitle = document.body.getAttribute('data-title') || 'Título Predeterminado';
    initializeComponents(pageTitle);
});
