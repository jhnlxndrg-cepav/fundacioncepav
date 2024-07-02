let numeroDeCuenta = document.getElementById("numeroDeCuenta");
let numeroDeFecha = document.getElementById("numeroDeFecha");
let nombreTitular = document.getElementById("nombreTitular");

console.log(numeroDeCuenta.textContent)

numeroDeCuenta.textContent = prompt("Ingrese el numero de cuenta");
numeroDeFecha.textContent = prompt("Ingrese la fecha de vencimiento");
nombreTitular.textContent = prompt("Ingrese el nombre del titular de la cuenta");