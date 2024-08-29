const hora = document.querySelector('.needle-hour');
const minutos = document.querySelector('.needle-minute');
const segundos = document.querySelector('.needle-seconds');
const hora2 = document.querySelector('.time');
const dia = document.querySelector('.date');
const botao = document.querySelector('.toggle');

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

toggle.addEventListener(click, (e) => {
    const html = document.querySelector('.html');
    if (html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML() = 'Tema Claro';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Tema Escuro';
    }
});

function setTime(){
    const time = new Date();

    const day = time.getDay();
    const month = time.getMonth();
    const year = time.getFullYear();
    const date = time.getDate();
    const hour = time.getHours();
    const hoursClock = hour >= 13 ? hour % 12: hour;

    hora.style.transform = `translate(-50%, -100%) rotate(${scale(hoursClock, 0, 12, 0, 360)}deg)`;
}