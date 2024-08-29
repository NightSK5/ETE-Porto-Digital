document.addEventListener("DOMContentLoaded", () => {
    const chartContainer = document.querySelector(".chart-container");
    const fileInput = document.getElementById("file-input");

    // Função para gerar as barras do gráfico
    function createChart(data) {
        chartContainer.innerHTML = ''; // Limpa o gráfico anterior
        const maxValue = Math.max(...data.map(item => item.value)); // Encontra o valor máximo para escala

        data.forEach(item => {
            const bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = `${(item.value / maxValue) * 100}%`;

            // Exibe o valor ao passar o mouse
            bar.title = `R$ ${item.value.toFixed(2)}`;

            chartContainer.appendChild(bar);
        });
    }

    // Carrega os dados do arquivo JSON (exemplo)
    fetch('data.json')
        .then(response => response.json())
        .then(data => createChart(data))
        .catch(error => console.error("Error ao carregar os dados:", error));
    
    // Alternar entre temas claro/escuro
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", () => {
        document.body.dataset.theme = document.body.dataset.theme === "dark" ? "" : "dark";
        localStorage.setItem('theme', document.body.dataset.theme || 'light');
    });

    // Carrega tema armazenado
    const storedTheme = localStorage.getItem('item');
    if (storedTheme) {
        document.body.dataset.theme = storadTheme;
    }

    // Carregar novos dados JSON ao selecionar arquivo
    fileInput.addEventListener("change", function() {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const data = JSON.parse(event.target.result);
            createChart(data);
        };
        reader.readAsText(file);
    });
});