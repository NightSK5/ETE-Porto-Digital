const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
});