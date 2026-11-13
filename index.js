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
    root.style.setProperty('--primary-bg', '#c5e6cc');
    root.style.setProperty('--primary-text', '#2a332b');
    root.style.setProperty('--secondary-bg', '#8fb691');
    root.style.setProperty('--article-bg', '#9fc9a4');
    root.style.setProperty('--secondary-accent', '#a7dfac');
    root.style.setProperty('--accent-color', '#2a332b');
}

function DarkMode() {
    root.style.setProperty('--primary-bg', '#111d13');
    root.style.setProperty('--primary-text', '#ffffff');
    root.style.setProperty('--secondary-bg', '#415d43');
    root.style.setProperty('--article-bg', '#709775');
    root.style.setProperty('--secondary-accent', '#5e7c61');
    root.style.setProperty('--accent-color', '#ffffff');
}