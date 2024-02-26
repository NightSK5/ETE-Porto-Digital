let saveFile = () => {
    const name = document.getElementById("iname");
    const pword = document.getElementById("pword");
    const mail = document.getElementById("mail");
    const country = document.getElementById("country");
    const day = document.getElementById("day");

    // console.log("\r Nome: " + name.value + "\r \n Senha: " + pword.value);
    let data = "\rNome: " + name.value + "\r \nSenha: " + pword.value + "\r \nE-mail: " + mail.value + "\r \nPaís: " + country.value + "\r \nData de Nascimento: " + day.value;

    console.log(data);

    const textToBlob = new Blob([data], {type: "text/plain"});

    var filename = new Date();

    var t_day = new Date();
    var t_day = t_day.getUTCDate();

    var month = new Date();
    var month = month.getUTCMonth();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + t_day

    const sFilename = filename;

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null){
        newLink.href = window.webkitURL.createObjectURL(textToBlob);
    } else {
        newLink.href = window.webkitURL.createObjectURL(textToBlob);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
}
