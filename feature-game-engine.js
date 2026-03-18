//Codi per generar el numero aleatori

let codiSecretFinal = generarCodiSecret()

function generarCodiSecret() {
    const codi = [];  //Guardar els digits del codi
    while (codi.length < 4) { //Mentre hi hagi menys de 4 elements, es seguira executant al bucle. Quan l'array tingui 4 elements ja no s'executarpa
        const num = Math.floor(Math.random() * 10);  //Generació d'un numero aleatori del 0 al 9
        codi.push(num); //Afegir el numero a l'array
    }
    return codi;
}

//Comparar el codi intorduit per l'usuari i el codi generat 
function compararCodis(codiUsuari, codiSecret) {

    // Array buit on guardarem el resultat de cada posició. Es mostrara 1 si es correcte, O si esta en posicio incorrecta, x si no apareix
    //Aquest es el resultat que es mostrarpa
    const resultat = [];

    // Recorrem les 4 posicions del codi intorduir per l'usuari
    for (let i = 0; i < 4; i++) {
        // Comprovem si el número de l'usuari és igual al del secret i si esta a la mateixa posicio
        if (codiUsuari[i] === codiSecret[i]) {
            //Com es el mateix numero i mateixa posició, es posara 1 en l'array de resultat.
            resultat.push("1");

       
        // Si NO és igual a la mateixa posició, comprovem si aquest número existeix en alguna altra posició del codi secret
        } else if (codiSecret.includes(codiUsuari[i])) {

            // Si el número existeix però no està al lloc correcte es posara un O en l'array de resultat
            resultat.push("Ø");

       //Si el numero no està en posicio correcta ni en cap altre posició, es posara un x en l'array
        } else {
            resultat.push("×");
        }
    }

    // Per a que el resultat estigui més presentable en comptes d'un array es mostraran els 4 caracters separats per un espai
    return resultat.join(" ");
}