let numeroDeCuenta = document.getElementById("numeroDeCuenta"); //  == $0
let fechaValidacion =document.getElementById("fechaValidacion"); //  == $0 
let titularTarjeta =document.getElementById("titularTarjeta"); //  == $0

console.log(numeroDeCuenta.textContent)
console.log(fechaValidacion.textContent)
console.log(titularTarjeta.textContent)


numeroDeCuenta.textContent = prompt("Ingrese el numero de cuenta");
fechaValidacion.textContent = prompt("Ingrese efecha de vencimiento");
titularTarjeta.textContent = prompt("Ingrese nombre del titular");