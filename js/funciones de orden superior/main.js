console.log("==================== Repaso ====================")
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
/* Callback hell 
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
*/
function callbackSumar (resultadoSumar) {
	console.log("La suma de 2 números es: ", resultadoSumar);
	multiplicar(resultadoSumar, callbackMultiplicar)
}
function callbackMultiplicar (resultadoMultiplicar) {
	console.log("La multiplicación de la suma es: ", resultadoMultiplicar);
	dividir(resultadoMultiplicar, callbackDividir)
}
function callbackDividir(resultadoDividir) {
	console.log("La división entre 2 es: ", resultadoDividir);
	restar(resultadoDividir, callbackRestar)
}
function callbackRestar(resultadoRestar) {
	console.log("La resta da: ", resultadoRestar);
	esMayor(resultadoRestar, callbackResultadoFinal)
}
function callbackResultadoFinal(resultadoFinal) {
	console.log("El resultado final", resultadoFinal);
}

sumar(5, 2, callbackSumar)


console.log("==================== Strings ====================")

console.log("--------- includes ----------")
let email = "aylenazulromero@gmail.com";
if (email.includes("@")) {
	console.log("Correo electrónico válido");
} else {
	console.log("Ingrese un correo electrónico válido")
}

console.log("--------- trim - trimEnd - trimStart  ----------")
let username = "     name123   "
console.log(username);
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

console.log("--------- substring  ----------") // (inicio,fin)
let cortarTexto = "Vamos a cortar este string";
console.log(cortarTexto);
console.log(cortarTexto.substring(0, 5));

console.log("--------- split  ----------")
let txt = "Lorem ipsum dolor sit amet";
console.log(txt.split(" ")); // cada vez que encuentre un espacio va a crear un nuevo elemento
console.log(txt.split(" ", 3))

console.log("--------- charAt  ----------")
console.log(txt.charAt(0)); // L

console.log("--------- repeat  ----------")
let repetir = "JavaScript ";
console.log(repetir.repeat(4));


console.log("=============== Funciones de Orden Superior =================")
/* const suma = (a,b) => { 
	retirm a+b;
} */

console.log("--------- forEach()  ----------")
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
miArray.forEach(function(elemento, index, arreglo) { // recibe 3 argumentos
	console.log(elemento); // obligatorio
	console.log(index); // opcional
	console.log(arreglo); // opcional
})
console.log("----------------------------------")
miArray.forEach(function(elemento) {
	console.log(elemento);
})
console.log("----------------------------------")
miArray.forEach(elemento => { // lo mismo pero con función flecha
	console.log(elemento)
})
console.log("----------------------------------")
for(miArray = 1; miArray <= 10; miArray++) { // lo mismo pero con for
	console.log(miArray)
}


console.log("--------- every()  ----------") /* pregunta si todos los elementos cumplen la condición, devuelve un valor
booleano */
const numeros = [8, 13, 56, 2, 77, 17, 64];
function menorA100(numeros) {
	return numeros < 100; // true
}
console.log(numeros.every(menorA100));
console.log(numeros.every(n => numeros < 50)); // lo mismo con función flecha


console.log("--------- some()  ----------") /* pregunta si algún elemento cumple la condición */
let num = [20, 1, 3, 58, 66, 135, 324, 756, 0];
console.log(num.some(numero => numero > 10)) // true: pregunto si algún elemento es mayor a 10
console.log(num.some(numero => numero > 100000000)) // false

console.log(num.some(function(elemento){
	return elemento == 66; // pregunto si algún elemento es igual a 66
}))


console.log("--------- map()  ----------")
const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
const impares = pares.map((numero) => numero + 1)
console.log(impares)
console.log(pares)
console.log("----------------------------------")
const numbers = [2, 3, 4, 8];
const potencia = numbers.map((numero) => Math.pow(numero, 2)) // devuelve la base elevada al exponente ej: Math.pow(7,2) -> 49
console.log(numbers)
console.log(potencia)
console.log("----------------------------------")
let lista = ["home", "about", "projects", "contact"]
let nav = lista.map((item) => `<li> ${item}</li>`)
document.write(nav.join(' '));


console.log("--------- find()  ----------")
const buscar = [30, 34, 50, 100];
const x = buscar.find(elemento => elemento > 20);
console.log(x)
console.log("----------------------------------")
let peliculas = ["Shrek", "Harry Potter", "Star Trek"];
let hp = peliculas.find(pelicula => {
	return pelicula.includes("potter");
})


console.log("--------- filter()  ----------")
let personas = [19, 22, 28, 35, 44, 10, 12, 33, 15, 40, 13, 17, 18]
let mayores = personas.filter((persona) => persona >= 18);
console.log(personas)
console.log(mayores)


console.log("--------- reduce()  ----------")
const suma = [10, 20, 20, 30].reduce((acumulador,elemento) => acumulador + elemento); // (acumulador, elemento) 
console.log(suma); // 80
const loMismo = [10, 20, 20, 50].reduce(function(a,b) {
	return a+b;
});
console.log(loMismo); // 100
console.log("-------------------------------")
const alumnos = [[9, 8, 7], [1, 5, 1], [8, 8, 7]];
const promedios = alumnos.map((alumnos) => { 
	let suma = alumnos.reduce((acumulador, elemento) => acumulador + elemento)
	return suma / alumnos.length;
});
console.log(promedios)
console.log("-------------------------------")
const nombres = ["pepe", "pepe2", "pepe", "pepe2", "pepito", "pepito", "pepe"];
const cantidad = nombres.reduce((acumulador,nombres) => {
	acumulador[nombres] = (acumulador[nombres] || 0) + 1;
	return acumulador;
}, {});
console.log(cantidad);