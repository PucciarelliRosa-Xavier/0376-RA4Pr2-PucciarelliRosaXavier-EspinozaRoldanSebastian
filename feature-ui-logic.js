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

// Event listener del botó

btnEnviar.addEventListener("click", () => {

    if (rondes <= 0) {
        logTerminal("NO QUEDEN RONDES.", "error");
        return;
    }
    
    const input = [];
    selects.forEach(select => {
        input.push(Number(select.value));
    });

    logTerminal("Intent: " + input.join(" "));

    const resultat = compararCodis(input, codiSecret);
    logTerminal("Resultat: " + resultat);

    if (resultat === "1 1 1 1") {
        logTerminal("ACCESS GRANTED. CODI CORRECTE!", "success");
        rondes = 0;
        rondesSpan.textContent = rondes;
        return;
    }

    rondes--;
    rondesSpan.textContent = rondes;

    if (rondes === 0) {
        logTerminal("SYSTEM LOCKED. HAS PERDUT.", "error");
        logTerminal("El codi era: " + codiSecret.join(" "), "error");
    }
});

inicialitzarSelects();