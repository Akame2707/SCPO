
let vaga = Number(localStorage.getItem("vaga"));
let inscritos = Number(localStorage.getItem("inscritos"));
let novop = Number(localStorage.getItem("novop"));
let monitores = Number(localStorage.getItem("monitores"));

document.getElementById("oficina").textContent =
    localStorage.getItem("oficina");

document.getElementById("vaga").textContent = vaga;
document.getElementById("inscritos").textContent = inscritos;
document.getElementById("novop").textContent = novop;
document.getElementById("monitores").textContent = monitores;

let nomes = [
    "Ana", "Gabriel", "Catarina", "Marta", "Julio", "Matias", "Matheus", "Lubawski", "Mariana", "Lucas", "Beatriz",
    "Pedro", "Julia", "Rafael", "Sofia", "Matheus",
    "Isabela", "Miguel", "Laura", "Arthur", "Helena",
    "Felipe", "Valentina", "Gustavo", "Alice", "Henrique",
    "Manuela", "Davi", "Clara", "Enzo", "Luiza",
    "Eduardo", "Cecilia", "Bruno", "Lara", "Thiago", "André"
];

let sobrenomes = [
    "Silva", "Santos", "Oliveira", "Souza", "Costa", "Augusto",
    "Pereira", "Rodrigues", "Almeida", "Nascimento", "Lima",
    "Gomes", "Ribeiro", "Carvalho", "Ferreira", "Martins",
    "Araújo", "Melo", "Barbosa", "Cardoso", "Rocha",
    "Dias", "Teixeira", "Moreira", "Correia", "Monteiro",
    "Mendes", "Freitas", "Maria", "Felipe", "Konrad", "Colombo", "Adriana", "Limas", "Lima", "Barros", "Vieira", "Cavalcanti"
];
let lista = document.getElementById("listaNomes");

for (let i = 0; i < inscritos + novop; i++) {

    let nome = nomes[Math.floor(Math.random() * nomes.length)];

    let sobrenome = sobrenomes[
        Math.floor(Math.random() * sobrenomes.length)
    ];

    let nomeCompleto = nome + " " + sobrenome;

    let item = document.createElement("p");
    item.textContent = nomeCompleto;

    lista.appendChild(item);
}