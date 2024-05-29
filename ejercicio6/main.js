window.onload = () => {
    const formulario = document.getElementById("formulario")

    formulario.onsubmit = (event) =>{
        event.preventDefault();

        const txtNombre = document.getElementById("nombre").value;
        const txtApellido = document.getElementById("apellido").value;
        const txtEdad = document.getElementById("edad").value;
        const txtAltura = document.getElementById("altura").value;
        const txtEmail = document.getElementById("email").value;

        // validaciones
        let validador = 0
        //El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.
        if(txtNombre.length !== 0 && txtNombre.length <= 50){
            if(txtApellido.length !== 0 && txtApellido.length <= 50){
                //La edad no debe ser negativa pero también validar que no sea menor de edad.
                if(txtEdad >= 18){
                    //La altura no puede ser negativa y no puede ser mayor a 230 (cm).
                    if(txtAltura >= 0 && txtAltura <= 230){
                        //El correo electrónico no puede estar vacío y debe incluir el ‘@’.
                        if(validarEmail(txtEmail)){
                            validador = 1;
                        }else{
                            alert("Email no valido, intente nuevamente");
                            txtEmail.value = "";
                            validador = 0;
                        }
                    }else{
                        alert("Altura no valida, intente nuevamente");
                        txtAltura.value = "";
                        validador = 0;
                    }
                }else{
                    alert("Edad no valida, intente nuevamente");
                    txtEdad.value = "";
                    validador = 0;
                }
            }else{
                alert("Apellido no valido, intente nuevamente");
                txtApellido.value = "";
                validador = 0;
            }
        }else{
            alert("Nombre no valido, intente nuevamente");
            txtNombre.value = "";
            validador = 0;
        }
        
        function validarEmail(email) {
            const expresionRegular = /^.+@.+\.[a-z]{2,}$/;
            return expresionRegular.test(email);
          }
         
        
        const lblValidacion = document.getElementById("validacion")
        if(validador === 1){
            lblValidacion.innerHTML = "Validacion Correcta"
            lblValidacion.style.color = "green"
        }else{
            lblValidacion.innerHTML = "Validacion Incorrecta"
            lblValidacion.style.color = "red"
        }
       // 
        //resultado.innerHTML = `El resultado del area es: ${areaChica + areaGrande}`
    }
}