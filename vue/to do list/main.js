let app = new Vue({
    el: "#app",
    data: {
        tareaNueva: "",
        tareas: [],
        mensaje: false,
    },
    methods: {
        agregarTarea() {
            this.tareas.push({ // push para agregar elemento al final del array
                nombre: this.tareaNueva.trim(),
                finalizada: false,
            })
            this.tareaNueva = ''; // me faltaba poner esto para quede vacio en input para agregar una tarea nueva
            this.mensaje = true; // y esto para que aparezca el mensaje de que se agrego correctamente la tarea
        },
        eliminarTarea(tarea) {
            let indice = this.tareas.indexOf(tarea); // indexOf() retorna el indice del elemento que queremos borrar
            this.tareas.splice(indice, 1) // borrar ese elemento indicando su indice    
            this.tareaNueva = ""
        }
    }
})