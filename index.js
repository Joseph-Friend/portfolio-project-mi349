var root = document.querySelector(':root');
var styleToggle = document.getElementById("styletoggle");

styleToggle.addEventListener("change", (event) => { 
    if (event.target.checked) {
        DarkMode();
    }
    else {
        LightMode();
    }
})

function LightMode() {
    root.style.setProperty('--primary-bg', '#ffffff');
    root.style.setProperty('--primary-text', '#000000');
    root.style.setProperty('--secondary-bg', '#c5c5c5');
    root.style.setProperty('--article-bg', '#dadada');
    root.style.setProperty('--secondary-accent', '#c0c0c0');
    root.style.setProperty('--accent-color', '#000000');
}

function DarkMode() {
    root.style.setProperty('--primary-bg', '#203b26');
    root.style.setProperty('--primary-text', '#ffffff');
    root.style.setProperty('--secondary-bg', '#3b6e40');
    root.style.setProperty('--article-bg', '#396138');
    root.style.setProperty('--secondary-accent', '#347b43');
    root.style.setProperty('--accent-color', '#e2ffd2');
}