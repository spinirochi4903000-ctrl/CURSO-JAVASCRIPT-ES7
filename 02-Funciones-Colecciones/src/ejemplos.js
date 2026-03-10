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

//4. Filtrar palabras que contengan la letra "a"
const palabrasfilter =  ["manzana", "pera", "durazno", "papaya", "uva", "kiwi", "lulo"];
const palabrasConA = palabrasfilter.filter(palabra => palabra.includes("a"));
console.log(palabrasConA);

//5. Filtrar usuarios con ids que contengan 10
const usuariosfilter2 = [
    {id: 102, nombre: "David", edad: 18},
    {id: 104, nombre: "Laura", edad: 17},
    {id: 204, nombre: "Valentina", edad:17},
    {id: 103, nombre: "Daniel", edad: 17},
    {id: 203, nombre: "Paula", edad: 17}
]
const UsuariosconID10 = usuariosfilter2.filter(usuarios => usuarios.id.toString().includes("10"));
console.log(UsuariosconID10)

//Ejemplos de Reduce

//1. Calcular la suma de una lista de numeros
const numerosreduce = [1, 2, 3, 4, 5];
const Suma = numerosreduce.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(Suma);

//2. Encontar el numero mayor
const numerosreduce2 = [8, 9, 4, 3, 10, 7, 11];
const numeroMayor2 = numerosreduce2.reduce((mayor , numero ) => numero > mayor ? numero : mayor, numerosreduce2[0]);
console.log(numeroMayor2);

//3. Contar la cantidad de veces que aparece una palabra en una lista
const palabrasreduce = ["manzana", "pera", "durazno", "papaya", "uva", "kiwi", "lulo", "manzana", "pera"];
const conteoPalabras = palabrasreduce.reduce((conteo, palabra) => {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
    return conteo;
}, {});
console.log(conteoPalabras);

//4. Calcular el promedio de una lista de numeros
const numerosreduce3 = [10, 20, 30, 40, 50];  
const promedio = numerosreduce3.reduce((acumulador, numero, index, array) => {
    acumulador += numero;
    if (index === array.length - 1) {
        return acumulador / array.length; // Devuelve el promedio en la última iteración
    }
    return acumulador; // Devuelve la suma acumulada en las iteraciones anteriores
}, 0);
console.log(promedio);

//5. Agrupar objetos por una propiedad
const usuariosreduce = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "María", edad: 22 },
    { id: 4, nombre: "Carlos", edad: 30 },
    { id: 5, nombre: "Sofía", edad: 25 },
];
const usuariosAgrupados = usuariosreduce.reduce((agrupados, usuario) => {
    const edad = usuario.edad; 
    if (!agrupados[edad]) {
        agrupados[edad] = []; // Si no existe el grupo para esa edad, lo crea
    } 
    agrupados[edad].push(usuario); // Agrega el usuario al grupo correspondiente
    return agrupados;
}, {}); 
console.log(usuariosAgrupados);


