//Ejemplos de Map 

//1. Aplicar un descuento a una lista de precios
const precios = [2000, 3000, 5000, 8000];
const descuento = 0.85;
const preciosConDescuento = precios.map(precio => precio * descuento);
console.log(preciosConDescuento);

//2. Convertir una lista de temperaturas de Celsius a Fahrenheit
const temperaturasCelsius = [24, 30, 17, 28];
const temperaturasFarenheit = temperaturasCelsius.map(temp => temp * 1.8 + 32);
console.log(temperaturasFarenheit);

//3. Extraer el nombre de cada usuario de una lista de objetos
const usuariosmap = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 30 },
  { id: 3, nombre: "María", edad: 22 }]
  const nombres = usuariosmap.map(usuario => usuario.nombre);
  console.log(nombres);

//4. Generar IDS autoaticos
const productosmap = [ "Cerveza", "Queso", "Pan", "Dulces"];
const productosconID = productosmap.map((productos, i) => ({ id: i +1, nombre : productos }));
console.log(productosconID);

//5. Mayusculizar una lista de palabras
const palabras = ["aprender", "programar", "javascript", "map"];
const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log(palabrasMayusculas);

//Ejemplos de Filter

//1. Filtar numeros pares de una lista
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numerosPares = numeros.filter(numeros => numeros % 2 === 0);
console.log(numerosPares);

//2. Filtrar usuarios mayores de 18 años
const usuariosfilter = [
  { id: 1, nombre: "Ana", edad: 15 },
  { id: 2, nombre: "Luis", edad: 30 },
  { id: 3, nombre: "María", edad: 22 }]
const usuariosMayores = usuariosfilter.filter(usuario => usuario.edad > 18)
console.log(usuariosMayores);

//3. Filtrar productos con precio mayor a 20000
const productosfilter = [
    {id: 1, nombre: "Pollo", precio: 20000},
    {id: 2, nombre: "Jugohit", precio: 3000},
    {id: 3, nombre: "Papel higienico", precio: 25000},
    {id: 4, nombre: "Arroz", precio: 50000}
]
const productosconPrecioMayor = productosfilter.filter(producto => producto.precio > 20000);
console.log(productosconPrecioMayor);