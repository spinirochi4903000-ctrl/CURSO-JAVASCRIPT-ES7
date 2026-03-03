"use strict";

const readline = require("readline");

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bienvenido al programa de conversión de unidades.");
console.log("Seleccione una opción:");
console.log("1. Convertir grados Celsius a Fahrenheit");
console.log("2. Convertir grados Fahrenheit a Celsius");
console.log("3. Convertir grados Celsius a Kelvin");
console.log("4. Convertir metros a kilómetros");
console.log("5. Convertir kilómetros a metros");
console.log("6. Convertir centímetros a metros");

interfaz.question("Ingrese el número de la opción deseada: ", opcion => {

  switch (opcion) {

    case "1":
      interfaz.question("Ingrese grados Celsius: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", (numero * 1.8) + 32);
        }
        interfaz.close();
      });
      break;

    case "2":
      interfaz.question("Ingrese grados Fahrenheit: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", (numero - 32) / 1.8);
        }
        interfaz.close();
      });
      break;

    case "3":
      interfaz.question("Ingrese grados Celsius: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", numero + 273.15);
        }
        interfaz.close();
      });
      break;

    case "4":
      interfaz.question("Ingrese metros: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", numero / 1000);
        }
        interfaz.close();
      });
      break;

    case "5":
      interfaz.question("Ingrese kilómetros: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", numero * 1000);
        }
        interfaz.close();
      });
      break;

    case "6":
      interfaz.question("Ingrese centímetros: ", valor => {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
          console.log("Error: Ingrese un número válido.");
        } else {
          console.log("Resultado:", numero / 100);
        }
        interfaz.close();
      });
      break;

    default:
      console.log("Opción no válida.");
      interfaz.close();
  }
});