// DOM
console.log("==================== getElementBy ====================")
// por ID
let elementoID = document.getElementById("id");
// por Clase
let elementoClase = document.getElementsByClassName("clase");
// por etiqueta
let elementoEtiqueta = document.getElementsByTagName("p");
// por el atributo Name
let elementoName = document.getElementsByName("name");


console.log("==================== querySelector ====================")
let elemento1 = document.querySelector("#selectorID");
let elemento2 = document.querySelector(".selectorClase");
let elemento3 = document.querySelector("h1");
let elemento4 = document.querySelector("div > p");
let elementos = document.querySelectorAll("p");
let array_elementos = Array.from(document.querySelectorAll("p")); // convertir el NodeList es un Array
console.log(array_elementos);


console.log("==================== Modificar elementos ====================")
// innerText - innerHTML
// innerText
console.log(document.querySelector("h1").innerText);
let modificarElemento = document.querySelector("h1");
modificarElemento.innerText = "JavaScript"; // reemplazo 
modificarElemento.innerText += ": DOM"; // si solo usamos = estamos reemplazando y si usamos += agregamos
// innerHTML
modificarElemento.innerHTML += "<p> Clase 18 </p>";


console.log("==================== Modificar CSS ====================")
// una vez q accedemos a un elemento podemos acceder a sus propiedades CSS con la propiedad .style
let modificarCSS = document.querySelector("p");
modificarCSS.style.display = "flex"; // .style.propiedad = valor css
modificarCSS.style.margin = "1rem";
modificarCSS.style.backgroundColor = "black"; // camelCase (el guión medio es resta en js)
modificarCSS.style.width = "35vw";
modificarCSS.style.padding = "2rem";
modificarCSS.style.color = "white";


console.log("==================== classList ====================")
// add - remove - replace - toggle - contains 

// add
let unElemento = document.querySelector("body");
unElemento.classList.add("bg-danger", "pt-5", "pl-3");
// remove
unElemento.classList.remove("pl-3");
// replace 
unElemento.classList.replace("bg-danger", "bg-warning");
// toggle 
unElemento.classList.toggle("agregoClase"); // la crea si no existe
unElemento.classList.toggle("agregoClase"); // la borra si ya existe
unElemento.classList.toggle("agregoClase", false) // con true agrega y con false saca
// contains
console.log(unElemento.classList.contains("bg-warning")); // true

// Julian
let elemento10 = document.querySelector("h1");
elemento10.innerText = elemento10.innerHTML.substring(0,10) + " concatenado con substring";
/* con substring estas sacando texto con 0 marcas el inicio y con 10 hasta
donde queres que termine entonces se esta borrando ":DOM" */