window.addEventListener("load",eventos);
function eventos(){
    //Fecha
    let fecha = new Date()
    let hoy = fecha.toLocaleDateString().split("/")
    document.getElementById("fecha").value=hoy[2]+"-"+(hoy[1]<=9?"0"+hoy[1]:hoy[1])+"-"+(hoy[0]<=9?"0"+hoy[0]:hoy[0]);
    //municipio
    /*
        *1.- Cargar el archivo JSON
        *2.- Recorrer el archivo y aislar los de Madrid
        3.- Generar option con los valores de Madrid
        finla: que el select tenga todos los municipios d emadrid
    */
   fetch("municipios.json")
   .then(conexion => conexion.json())
   .then(json => recorrer(json))
    function recorrer(json){
        //console.log(json["album1"]["discos1"]["artista"])
        for (const iterator of json) {
            if(iterator.id.startsWith("28")){
                let option = document.createElement("option")
                option.setAttribute("value", iterator.id)
                //opcion 1 para meter texto
                option.innerHTML=iterator.nm;
                //opcion 2 para meter texto
                /*
                    let texto = document.createTextNode(iterator.nm)
                    option.appendChild(texto)
                */
                document.getElementById("municipio").appendChild(option);
            }
        }
    }
    document.getElementById("municipio").addEventListener("change",valor);
    function valor(){
        if(this.value == "default"){
            document.getElementById("errorMunicipio").innerHTML = "Debe seleccionar un municipio"
        }else
        document.getElementById("errorMunicipio").innerHTML ="";
    }
    //Email
    document.getElementById("email").addEventListener("change",evaluarEmail);
    function evaluarEmail(){
        let email = document.getElementById("email").value;
        if (/[a-zA-z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-z]{2,10}/.test(email)){
            document.getElementById("errorEmail").innerHTML = "";
           } else {
            document.getElementById("errorEmail").innerHTML = "El email puede contener sólo letras,números, guión bajo y punto antes del @"
           }
    }
    //Checkbox
    document.getElementById("opciones").addEventListener("change",opciones);
    function opciones(){
        let opciones = document.getElementsByName("op");
        let labelOtros = document.getElementById("otros");
        for(let i = 0; i < opciones.length;i++){
            if(opciones[i].value == "otros" && opciones[i].checked){
                let txtObj = document.createElement("input");
                txtObj.setAttribute("type","text");
                txtObj.setAttribute("id","txtObj");
                txtObj.setAttribute("required","");
                labelOtros.appendChild(txtObj);
            }
            if(opciones[i].value == "otros" && !opciones[i].checked){
                labelOtros.removeChild(txtObj);
            }
        }
    }
} 


                                                /* iker, codigo inutil
                                                let fecha = new Date();
                                            if(fecha.getMonth() < 10){
                                            document.getElementById("fecha").value = fecha.getDate()+"/"+("0"+(fecha.getMonth()+1)+"/"+fecha.getFullYear())
                                            }else{
                                                document.getElementById("fecha").value = fecha.getDate()+"/"+(fecha.getMonth()+1+fecha.getFullYear())
                                            }*/