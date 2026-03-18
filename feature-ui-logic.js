// Creació de les variables globals 
const selects = document.querySelectorAll(".code-input");
const btnEnviar = document.getElementById("btn-enviar");
const terminal = document.getElementById("terminal");
const rondesSpan = document.getElementById("rondes-restants");

let rondes = 5;

const codiSecret = [1, 2, 3, 4];

// Omplir els selects amb les opcions del 0 al 9

function inicialitzarSelects() {
    selects.forEach(select => {
        for (let i = 0; i <= 9; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    });
}

// Terminal y autoscroll

function logTerminal(missatge, tipus = "normal") {
    const line = document.createElement("p");
    line.classList.add("line");

    if (tipus === "error") line.classList.add("error");
    if (tipus === "success") line.classList.add("success");

    line.textContent = "> " + missatge;

    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

// Logica basica del juego

function compararCodis(input, secret) {
    let resultat = [];

    for (let i = 0; i < 4; i++) {
        if (input[i] === secret[i]) {
            resultat.push("1"); // correcte
        } else if (secret.includes(input[i])) {
            resultat.push("Ø"); // mal col·locat
        } else {
            resultat.push("×"); // no hi és
        }
    }

    return resultat.join(" ");
}
