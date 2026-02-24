"use strict";

// ===== FUNCIONES DE CONVERSIÓN =====
function convertirTemperatura(valor, origen, destino) {
  if (origen === "celsius" && destino === "fahrenheit") {
    return (valor * 9 / 5) + 32;
  }
  if (origen === "fahrenheit" && destino === "celsius") {
    return (valor - 32) * 5 / 9;
  }
  if (origen === "celsius" && destino === "kelvin") {
    return valor + 273.15;
  }
  if (origen === "kelvin" && destino === "celsius") {
    return valor - 273.15;
  }
  return null;
}

function convertirLongitud(valor, origen, destino) {
  if (origen === "metros" && destino === "kilometros") {
    return valor / 1000;
  }
  if (origen === "kilometros" && destino === "metros") {
    return valor * 1000;
  }
  if (origen === "centimetros" && destino === "metros") {
    return valor / 100;
  }
  if (origen === "metros" && destino === "centimetros") {
    return valor * 100;
  }
  return null;
}

// ===== VALIDACIONES =====
function validarNumero(n) {
  return typeof n === "number" && !Number.isNaN(n) && isFinite(n);
}

// ===== PROGRAMA PRINCIPAL =====
function convertir(tipo, valor, origen, destino) {
  try {
    if (!validarNumero(valor)) {
      throw new Error("El valor debe ser un número válido");
    }

    let resultado;

    if (tipo === "temperatura") {
      resultado = convertirTemperatura(valor, origen, destino);
    } else if (tipo === "longitud") {
      resultado = convertirLongitud(valor, origen, destino);
    } else {
      throw new Error("Tipo de conversión no válido");
    }

    if (resultado === null) {
      throw new Error("Unidades no soportadas");
    }

    console.log(`Resultado: ${resultado}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// ===== PRUEBAS =====
convertir("temperatura", 20, "celsius", "fahrenheit");
convertir("temperatura", 100, "fahrenheit", "celsius");
convertir("longitud", 1500, "metros", "kilometros");
convertir("longitud", 50, "centimetros", "metros");

// ERRORES
convertir("temperatura", "hola", "celsius", "kelvin");
convertir("longitud", 10, "litros", "metros");