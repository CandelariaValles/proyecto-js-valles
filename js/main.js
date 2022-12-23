let nombreCliente
let metrosCuadrados
let alturaTecho
let tipoCerramientos
let indiceMadera
let indicePvc
let indiceAluminio
let indice


function ingresoCliente() {
    nombreCliente= prompt("Bienvenido a la calculadora de consumo energético de Rissol. Por favor ingrese nombre y apellido para iniciar!")
    if (nombreCliente == "") {
        alert ("No ha ingresado su nombre");
    }
    else {

    alert ("Bienvenido/a " + nombreCliente);
} 
}

ingresoCliente();

function calcularConsumo () {
metrosCuadrados = parseFloat(prompt("Ingrese cuántos metros cuadrados tiene su hogar:"));
alturaTecho = parseFloat(prompt("Ingrese la altura aproximada del techo en metros:"));
tipoCerramientos = prompt("Ingrese 1- si posee cerramientos en madera, 2- si sus cerramientos son en aluminio o 3- si sus cerramientos son en PVC:");

function calcularIndice () {
    if (tipoCerramientos == "1") {
        indice = 0.05
    }
    else if (tipoCerramientos == "2"){
        indice = 0.04
    }
    else if (tipoCerramientos == "3") {
        indice = 0.03
    }
    else {
        alert ("Por favor ingrese una opción")
        tipoCerramientos
    }
}
calcularIndice ();
console.log (calcularIndice)

let consumoEnergetico = metrosCuadrados * alturaTecho * indice

console.log (consumoEnergetico)
alert ("El consumo aproximado de su hogar es de " + consumoEnergetico+ " kw.")
}
calcularConsumo();

const productos = [{id: 1,nombre: "Diamond", kw: 24, precio: 2569},
{id:2, nombre: "Emerald", kw: 28, precio: 2769},
{id:3, nombre: "Platinum", kw: 34, precio: 2969}
]
console.log (productos.length)

const productosSinIva = productos.map((producto) => { return { nombre: producto.nombre, precio: producto.precio / 1.22 } })
;
console.log(productosSinIva);

alert ("Los productos disponibles son los siguientes:")

for (const producto of productos) {
    console.log (producto.kw)
    alert('La estufa ' + producto.nombre + ' con una capacidad de ' + producto.kw + ' kw. Su precio es de ' + producto.precio + ' euros.');
}
const productoConsumoBajo = productos.find((producto)=>producto.kw<25);
console.log(productoConsumoBajo);
const productoConsumoMedio = productos.find((producto)=>producto.kw>25&&producto.kw<29);
console.log(productoConsumoMedio);
const productoConsumoAlto = productos.find((producto)=>producto.kw>29);
console.log(productoConsumoAlto);




// function productoAdapto () {
//     if (consumoEnergetico < 19){
//         const consumoBajo =productos.slice (0,1);
//         console.log (consumoBajo)
//         alert ("El producto que mejor se adapta a ti es la estufa " + consumoBajo.nombre + "de " + consumoBajo.kw +" kw. Su precio es de " + consumoBajo.precio + " euros.")

//     }

//     else if (consumoEnergetico <24) {
//         const consumoMedio = productos.slice (1,2)
//         console.log (consumoMedio)

    
//     }
//     else {
//         const consumoAlto = productos.slice(2,productos.lenght)
//         console.log (consumoAlto)

//     };
// }
// productoAdapto ();


