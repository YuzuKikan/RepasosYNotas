window.addEventListener("load",cargarFunciones)


function cargarFunciones(){

    document.getElementById("sumar").addEventListener("click",operaciones)
    document.getElementById("restar").addEventListener("click",operaciones)
    document.getElementById("multiplicar").addEventListener("click",operaciones)

    document.getElementById("n1").addEventListener("blur",comprobarNumero)
    document.getElementById("n2").addEventListener("blur",comprobarNumero)
 
   
    

}

function comprobarNumero(){

    numero1 = document.getElementById("n1")
    numero2 = document.getElementById("n2")

    if(numero1.value == "")
        document.getElementById("numeroMal").innerHTML ="Introduce un numero valido"
    else{
        document.getElementById("numeroMal").innerHTML =""
        document.getElementById("n1").style.borderColor = "lime"
    }



    if(numero2.value == "")
        document.getElementById("numeroMal2").innerHTML ="Introduce un numero valido"
    else{
        document.getElementById("n2").style.borderColor = "lime"
        document.getElementById("numeroMal2").innerHTML =""
    }
 
}

function operaciones(evento){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    resultado = 0
    switch (evento.target.id) {
        case "sumar":
            resultado = n1+n2
            break;
        case "restar":
            resultado = n1-n2   
            break;
        case "multiplicar":
            resultado = n1*n2   
            break;

    }
    document.getElementById("total").innerHTML = resultado
}