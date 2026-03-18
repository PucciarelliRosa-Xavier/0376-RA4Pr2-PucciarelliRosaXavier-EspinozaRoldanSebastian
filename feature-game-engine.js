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