// Function to load HTML components
function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', componentPath, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            element.innerHTML = xhr.responseText;
        } else {
            console.error(`Error loading component ${componentPath}: ${xhr.status}`);
            element.innerHTML = `<div class="text-red-500">Error loading component</div>`;
        }
    };
    
    xhr.onerror = function() {
        console.error(`Network error loading component ${componentPath}`);
        element.innerHTML = `<div class="text-red-500">Network error loading component</div>`;
    };
    
    xhr.send();
}

// Load header and footer when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}

function loadComponents() {
    console.log('Loading components...');
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
} 