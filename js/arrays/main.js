console.log("------- Repaso -------")

function miFuncion (a, b) { // función declarativa
	return a+b;
}
miFuncion(10,5); // llamamos a la función

let miFuncion2 = function() { // función expresiva
	console.log("Hola Mundo");
}
miFuncion2();

console.log("--------- Callback --------")
/* una callback es una función que recibe como parámetro a otra función para que cuando se termine de ejecutar
llame a su callback */

/* function saludar(callback) {
	callback() // ejectamos la función pero NO la creamos, solo estamos llamando a algo que todavía no existe como si existiera
}
// saludar() 
saludar(function() { // acá va a existir la función callback
console.log("hola!");
}); // solo estamos definiendo la función NO la estamos ejecutando

// vamos a agregar un parámetro más
function saludar (name, callback) {
	callback(name) // en la callback pasamos como argumento también name
}
saludar("Pepito", function(name) { // en la invocación de la función llamadora tenemos un parámetro y como callback una función que es un definición recibe un parámetro
	console.log("Hola", name)
})
*/ 
function saludar(name, callback) {
	callback(name); // lo mismo q antes
}

function saludo(name) {
	console.log("Hola", name);
}
saludar("Pepito2", saludo);

console.log("------------- Ejemplo -----------")
/* Sumar 2 números,
   Al resultado de la suma lo queremos multiplicar
   Al resultado de esa multiplicación lo queres dividir
   Al resultado de esa división le queremos restar número
   Indicar si el resultado es mayor a 10 */

function sumar(num1, num2, callback) {
	callback(num1+num2); // necesitamos el resultado de ese proceso por eso la callback
}
function multiplicar(num, callback) {
	callback(num*num);
}
function dividir(num, callback) {
	callback(num/2);
}
function restar(num, callback) {
	callback(num-10);
}
function esMayor(num, callback) {
	if (num > 10) {
		callback("es mayor a 10")
	} else {
		callback("es menor a 10")
	}
}
// Callback hell 

sumar(5, 2, function(resultadoSumar) {
	console.log("La suma de 2 números es: ", resultadoSumar);
	multiplicar(resultadoSumar, function(resultadoMultiplicar) {
		console.log("La multiplicación de la suma es: ", resultadoMultiplicar);
		dividir(resultadoMultiplicar, function(resultadoDividir){
			console.log("La división es: ", resultadoDividir);
			restar(resultadoDividir, function(resultadoRestar){
				console.log("La resta da: ", resultadoRestar);
				esMayor(resultadoRestar, function(resultadoFinal){
					console.log("El resultado final", resultadoFinal)
				})
			})
		})
	})
})

function saludar(name, callback) {
	callback(name); // lo mismo q antes
}

function saludo(name) {
	console.log("Hola", name);
}
saludar("Pepito2", saludo);



console.log("--------- Funciones flecha --------")
// función declarativa
function suma1(a,b){
	return a+b;
}
// función expresiva
const sumar3 = function (a,b) {
	return a+b;
}
// función flecha
const sumar2 = (a,b) => {
	return a+b;
}

console.log("--------- Array --------")

// hay dos formas de crear un arreglo
let asi = ["Hola", "Chau", 1, 2, 3, true, false]; // recomendado
let oAsi = new Array('uno', 'dos', 3);

//  miArray = [0,  1,  2,  3,  4,  5,  6,  7, ...]
let miArray = [7, 13, 26, 14, 17, 32, 29, 10, 4, 2];
console.log(miArray);
miArray.sort(function(a,b){return a-b}) // ordenado de menor a mayor
console.log(miArray);

console.log(miArray.length) // la longitud del array

let listaNombres = ["Evangelina", "Natalia", "Debora", "Yamila", "Lucia"]; 
console.log(listaNombres.sort()); // orderar alfabeticamente
console.log("El último nombre es: " + listaNombres[listaNombres.length-1]) // último
listaNombres.push("Rocio"); // push nos añade un valor al final
console.log(listaNombres);
listaNombres.unshift("Pepe"); // unshift nos añade un valor al inicio
console.log(listaNombres);
console.log("Los nombres de algunas personas del curso son: " + listaNombres.join(", ")); // imprime los elementos del array en string
listaNombres.shift() // borra un elemento del inicio del array
console.log(listaNombres)
listaNombres.splice(1,2);
console.log(listaNombres) // el primer valor es para la posición y el segundo para la cantidad a borrar
listaNombres.splice(1,0, "Nombre", "Nombre2")
console.log(listaNombres)