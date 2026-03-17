const numeros = [2, 4, 6, 8, 10];
const multiplicaentre2 = numeros.map(numero => numero * 2);
console.log (multiplicaentre2);

const nombres = ["ana", "luis", "marta", "pedro"];
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayusculas);

const palabras = ["sol", "computador", "mesa", "javascript"];
const longitudpalabras = palabras.map(palabras => palabras.length);
console.log (longitudpalabras);

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerospares = numeros2.filter(numero => numero % 2 === 0);
console.log(numerospares);

const palabras2 = ["casa", "ventana", "sol", "computadora", "luz"];
const palabrasconmasde5letras = palabras2.filter(palabras => palabras.length > 5);
console.log(palabrasconmasde5letras);

const estudiantes = [
    {nombre: "Ana", nota: 4.5},
    {nombre: "Luis", nota: 2.8},
    {nombre: "Marta", nota: 3.7},
    {nombre: "Carlos", nota: 2.5}
];
const estudiantesaprobados = estudiantes.filter(estudiante => estudiante.nota >= 3.0);
console.log(estudiantesaprobados);

const numeros3 = [5, 10, 15, 20];
const sumatotal = numeros3.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumatotal);


const numeros4 = [2, 3, 4];
const resultadototal = numeros4.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(resultadototal);

const palabras3 = ["hola", "mundo", "js"];
const contartotalletras = palabras3.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
console.log(contartotalletras);

const numeros5 = [45, 12, 78, 3, 19, 1];
const numerosmenoramayor = numeros5.sort((a, b) => a - b);
console.log(numerosmenoramayor);

const numerosmayoraamenor = numeros5.sort((a, b) => b - a);
console.log(numerosmayoraamenor);

const palabras4 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
const palabrasordenadas = palabras4.sort();
console.log(palabrasordenadas);

const productos = [
    {nombre: "Teclado", precio: 120000},
    {nombre: "Mouse", precio: 50000},
    {nombre: "Monitor", precio: 800000},
    {nombre: "USB", precio:30000}
];
const masbaratosamascaros = productos.sort((a, b) => a.precio - b.precio);
console.log(masbaratosamascaros);

// 15. Clasificación de color con switch
const color = prompt("Ingrese un color (rojo, verde, amarillo):").toLowerCase();
switch (color) {
    case "rojo":
        console.log("Color de alerta");
        break;
    case "verde":
        console.log("Color de avance");
        break;
    case "amarillo":
        console.log("Color de precaución");
        break;
    default:
        console.log("Color no reconocido");
        break;
}

// 16. Tabla del 5 con while
let i = 1;
while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
}

// 17. Contar del 10 al 1 con while
let cuenta = 10;
while (cuenta >= 1) {
    console.log(cuenta);
    cuenta--;
}
console.log("¡Despegue!");

// 18. Sumar números hasta llegar a 100 con while
let suma = 0;
let numero = 1;
let cantidadNumeros = 0;
while (suma < 100) {
    console.log(`Sumando: ${numero}`);
    suma += numero;
    numero++;
    cantidadNumeros++;
}
console.log(`Suma final: ${suma}`);
console.log(`Números usados: ${cantidadNumeros}`);

// 19. Ejercicio combinado: filter + map
const numerosParaFiltrar = [3, 8, 15, 20, 7, 12, 1, 30];
const resultado19 = numerosParaFiltrar
    .filter(n => n > 10)
    .map(n => n * 2);
console.log(resultado19); // [30, 40, 24, 60]

// 20. Ejercicio integrador: filter + sort + map + reduce
const ventas = [
    { producto: "Mouse", cantidad: 3, precio: 50000 },
    { producto: "Teclado", cantidad: 2, precio: 120000 },
    { producto: "Monitor", cantidad: 1, precio: 800000 },
    { producto: "USB", cantidad: 5, precio: 30000 }
];

const ventasFiltradas = ventas
    .filter(v => v.cantidad >= 2)
    .sort((a, b) => b.precio - a.precio);

const frasesVentas = ventasFiltradas.map(v => `${v.producto} - Total: ${v.cantidad * v.precio}`);
console.log(frasesVentas);

const totalVentas = ventasFiltradas.reduce((acc, v) => acc + v.cantidad * v.precio, 0);
console.log(`Total ventas: ${totalVentas}`);

const input = prompt(
    "Ingrese un número del 1 al 7 (1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado, 7=Domingo):"
);
const numero6 = parseInt(input, 10);

if (Number.isNaN(numero6)) {
    console.log("Número inválido");
} else {
    switch (numero6) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número inválido");
    }
}


