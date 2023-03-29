window.addEventListener("load", eventos);
function eventos() {
    //inico
    if (document.cookie.includes("usuario=")) {
        //poner valor nombre
        let usuario = document.cookie.split(";")
        for (const iterator of usuario) {
            let array = iterator.split("=")
            if (array[0].trim() == "usuario") {
                document.getElementById("nombre").value = array[1];
                document.getElementById("nombre").disabled = true;
            }
        }
        document.getElementById("recordar").checked = true;
        //poner enlace olvidar
        document.getElementById("enlace").innerHTML = "Olvidar nombre de usuario."
        document.getElementById("enlace").addEventListener("click", quitar)
        function quitar() {
            //1
            document.getElementById("nombre").value = "";
            //2
            document.getElementById("nombre").disabled = false;
            //3
            document.cookie = "usuario= ; max-age=-1";
            //4
            document.getElementById("enlace").innerHTML = ""
            //5
            document.getElementById("recordar").checked = false;
        }
        /*
        *1-poner el enlace
        *2-un evento al puldar el enlace
            *1-quita el valor del nombre
            *2-pone el disable en false
            *3-quita cookie usuario
            *4-se quita el enlace olvidar
            *5-desmarcar recordar
        */
    }
    //mostrar
    document.getElementById("mostrar").addEventListener("click", mostrar);
    function mostrar() {
        let check = document.getElementById("mostrar");
        if (check.checked) {
            document.getElementById("pwd").type = "text";
        } else {
            document.getElementById("pwd").type = "password";
        }
    }
    //formulario
    document.getElementById("formulario").addEventListener("submit", enviar);
    function enviar(e) {
        e.preventDefault();
        fetch("usuario2.xml")
            .then(conexion => conexion.text())
            .then(datos => new DOMParser().parseFromString(datos, "application/xml"))
            .then(respuesta => trabajar(respuesta))
    }
    function trabajar(xml) {
        if (xml.getElementsByTagName("correcto")[0].textContent == "no") {
            document.getElementById("error1").style.color = "red";
            document.getElementById("error1").innerHTML = xml.getElementsByTagName("error")[0].textContent;
        } else {
            let recordar = document.getElementById("recordar");
            if (recordar.checked) {
                let nombre = document.getElementById("nombre").value;
                document.cookie = "usuario=" + nombre + "; max-age=" + (12 * 30 * 24 * 60 * 60);
            }
            window.location.href = "Ejercicio3.html"
        }
    }
}
