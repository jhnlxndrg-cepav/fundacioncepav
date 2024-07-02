let numeroDeCuenta = document.getElementById("numeroDeCuenta"); //  == $0
let fechaValidacion =document.getElementById("fechaValidacion"); //  == $0 
let titularTarjeta =document.getElementById("titularTarjeta"); //  == $0


// console.log(numeroDeCuenta.textContent)
// console.log(fechaValidacion.textContent)
// console.log(titularTarjeta.textContent)


// numeroDeCuenta.textContent = prompt("Ingrese el numero de cuenta");
// fechaValidacion.textContent = prompt("Ingrese efecha de vencimiento");
// titularTarjeta.textContent = prompt("Ingrese nombre del titular");

let inputNumeroDeCuenta = document.getElementById("numeroDeTarjeta");
inputNumeroDeCuenta.addEventListener("keyup" , function name(evento) {
    numeroDeCuenta.textContent = evento.target.value
    
})


let inputFechaValidacion = document.getElementById("fechaVencimiento");
inputFechaValidacion.addEventListener("keyup" , function name(evento) {
    fechaValidacion.textContent = evento.target.value

})


let inputTitularTarjeta = document.getElementById("dueñoTarjeta");
inputTitularTarjeta.addEventListener("keyup" , function name(evento) {
    titularTarjeta.textContent = evento.target.value
})

let inputCcv = document.getElementById("ccv");
inputCcv.addEventListener("keyup" , function name(evento) {
    ccv.textContent = evento.target.value
})