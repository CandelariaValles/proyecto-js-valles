let nomeCliente
let metriCuadri
let altezzaSoffitto
let tipoInfissi
let indicelegno
let indicePvc
let indiceAlluminio
let indice


function ingresoCliente() {
    nomeCliente= prompt("Benvenuto al calcolatore di consumo energetico di Rissol. Per favore inserisca il suo nome e cognome per iniziare!")
    if (nomeCliente == "") {
        alert ("Non hai inserito nessun nome");
    }
    else {

    alert ("Benvenuto/a " + nomeCliente);
} 
}

ingresoCliente();

function calcolareConsumo () {
metriCuadri = parseFloat(prompt("Inserisca i metri cuadri della sua abitazione:"));
altezzaSoffitto = parseFloat(prompt("Inserisca l'altezza aprossimativa del soffitto:"));
tipoInfissi= prompt("Inserica 1- se possiede infissi in legno, 2- se possiede infissi in alluminio o 3- se possiede infissi in PVC:");

const indice=0.05


let consumoEnergetico = metriCuadri * altezzaSoffitto * indice

console.log (consumoEnergetico)
alert ("Il consumo della sua abitazione é di " + consumoEnergetico+ "kw.")
}
calcolareConsumo();





