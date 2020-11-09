let input = document.querySelector("#email");
input.addEventListener("invalid", (evento) => {
    let input = evento.target;
    let mensaje = input.elementSibling;
    mensaje.innerText = input.validationMessage;
});
input.addEventListener("input", (evento) => {
    let input = evento.target;
    input.classList.remove("is-valid", "is-invalid");
    if (input.checkValidity()) {
        input.classList.add("is-valid");
    } else {
        input.classList.add("is-invalid");
    }
})
let app = new Vue({
    el: "#app",
    data: {
        password: null,
        estado: "",
        invalidos: ["admin", "123456", "contraseña", "password"],
        check: false,
    },
    watch: { // watch sirve para vigilar variables, es un objeto donde vamos a guardar funciones q se van a llamar igual que las variables que queremos vigilar y cuando ocurra un cambio en tal variable vue va a llamar a la función con 2 argumentos: el anterior y el nuevo
        password(nuevo, viejo) {
            if (this.invalidos.indexOf(nuevo) > -1) {
                this.estado = "Ingrese una contraseña más difícil";
                return false;
            } else if (nuevo.length < 5) {
                this.estado = "La contraseña debe tener al menos 5 caracteres";
                return false;
            } else {
                this.estado = "Contraseña válida";
            }
        }
    }
})