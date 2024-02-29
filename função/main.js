let idade = parseInt(prompt("Qual é sua idade: "));
let cnh = prompt("Você possui CNH: Sim ou Não: ");

if (idade < 18 && cnh == "Não") {
    alert("Você não pode dirigir!");
} else if (idade > 18 && cnh == "Não") {
    alert("Você não pode dirigir!");
} else {
    alert("Você pode dirigir!");
}