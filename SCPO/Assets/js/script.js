
const formulario = document.getElementById("scpo");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let oficina = document.getElementById("oficina").value;
    let vaga = Number(document.getElementById("vaga").value);
    let inscritos = Number(document.getElementById("inscritos").value);
    let novop = Number(document.getElementById("novop").value);
    let monitores = Number(document.getElementById("monitores").value);

    localStorage.setItem("oficina", oficina);
    localStorage.setItem("vaga", vaga);
    localStorage.setItem("inscritos", inscritos);
    localStorage.setItem("novop", novop);
    localStorage.setItem("monitores", monitores);

    document.getElementById("erro1").textContent = "";
    document.getElementById("erro2").textContent = "";
    document.getElementById("erro3").textContent = "";

    if (inscritos + novop > vaga) {
        document.getElementById("erro1").textContent =
            "A quantidade de participantes ultrapassa o total de vagas.";
    }
    else if (novop <= 0) {
        document.getElementById("erro2").textContent =
            "A quantidade de participantes novos deve ser maior que zero.";
    }
    else if (monitores < (inscritos + novop) / 10) {
        document.getElementById("erro3").textContent =
            "A quantidade de monitores não é suficiente para a quantidade de inscritos.";
    }
    else {
        window.location.href = "resultado.html";
    }
});
