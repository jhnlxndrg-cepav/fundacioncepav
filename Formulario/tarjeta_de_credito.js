let numeroDeCuenta = document.getElementById("numeroDeCuenta"); //  == $0
let numeroValidacion // conde here...
let nombreTitular // conde here...

// console.log(numeroDeCuenta.textContent)

// numeroDeCuenta.textContent = prompt("Ingrese el numero de cuenta");
// numeroValidacion.textContent = prompt();
// nombreTitular.textContent = prompt();
let inputNumeroDeCuenta = document.getElementById("numeroDeTarjetaGAMP"); //  == $0
inputNumeroDeCuenta.addEventListener("keyup", function(evento) {
    numeroDeCuenta.textContent = evento.target.value    
})