Vue.component("tabla", {
    template: `  <div> 
                   <div class="container-sm">
                        <p class="text-center">
                            Tabla de Multiplicar
                        </p>
                    </div>
                    <form>
                        <div class="form-group text-center">
                            <label>
                                Ingrese un número
                            </label>
                            <input class="form-control mt-2" type="number" v-model="numero"/>
                        </div>
                    </form>
                    <table class="table table-hover table-sm" v-show="numero">
                        <tbody>
                            <tr class="text-center" v-for="n in 10">
                                <td>
                                    {{numero}}
                                </td>
                                <td>
                                    x
                                </td>
                                <td>
                                    {{n}}
                                </td>
                                <td>
                                    =
                                </td>
                                <td>
                                    {{numero*n}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div> 
	`,
    data() {
        return {
            numero: "",
        }
    }
})