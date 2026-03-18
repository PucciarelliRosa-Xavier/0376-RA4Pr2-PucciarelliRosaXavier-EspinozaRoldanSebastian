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
