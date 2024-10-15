        function calcularTotal() {
           
            var pizza = document.getElementById("pizza").value;
            var cantidad = document.getElementById("cantidad").value;
            
            var nombrePizza = "";
            if (pizza === "14000") {
                nombrePizza = "Queso";
            } else if (pizza === "16000") {
                nombrePizza = "Jamón y Queso";
            } else if (pizza === "20000") {
                nombrePizza = "Especial";
            }

            var totalExtras = 0;
            var ingredientesSeleccionados = "";
            var tieneExtras = false;

            var maiz = document.getElementById("maiz");
            if (maiz.checked) {
                totalExtras = totalExtras + parseInt(maiz.value);
                ingredientesSeleccionados = ingredientesSeleccionados + "Maíz";
                tieneExtras = true;
            }

            var extraQueso = document.getElementById("extraQueso");
            if (extraQueso.checked) {
                if (tieneExtras) {
                    ingredientesSeleccionados = ingredientesSeleccionados + ", ";
                }
                totalExtras = totalExtras + parseInt(extraQueso.value);
                ingredientesSeleccionados = ingredientesSeleccionados + "Queso Extra";
                tieneExtras = true;
            }

            var peperoni = document.getElementById("pollo");
            if (peperoni.checked) {
                if (tieneExtras) {
                    ingredientesSeleccionados = ingredientesSeleccionados + ", ";
                }
                totalExtras = totalExtras + parseInt(peperoni.value);
                ingredientesSeleccionados = ingredientesSeleccionados + "Pollo ";
                tieneExtras = true;
            }

            var total = (parseInt(pizza) + totalExtras) * cantidad;

            var totalFormateado = "$" + total;

            if (!tieneExtras) {
                ingredientesSeleccionados = "Ninguno";
            }
            document.getElementById("resultado").innerHTML = 
                "<strong>Pizza Seleccionada:</strong> " + nombrePizza + "<br>" +
                "<strong>Ingredientes Extras:</strong> " + ingredientesSeleccionados + "<br>" +
                "<strong>Total a Pagar:</strong> " + totalFormateado;
        }
    