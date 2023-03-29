window.addEventListener("load",cargar)

function cargar(){
    document.getElementById("unidades").addEventListener("keyup",calcular)
    document.getElementById("precio").addEventListener("keyup",calcular)
}

function calcular(){
    
    if(document.getElementById("unidades").value != "")
        document.getElementById("unidades").style.borderColor = "lime"

    if(document.getElementById("precio").value != "")
        document.getElementById("precio").style.borderColor = "lime"

    let unidades = parseInt(document.getElementById("unidades").value)
    let precio = parseFloat(document.getElementById("precio").value)
    let cantidad = unidades*precio
    let total = document.getElementById("total")

    
    if(!isNaN(cantidad)){
        total.innerHTML = cantidad.toLocaleString('es-ES',{style: "currency", currency: "EUR"})
    }

    //Quita cualquier posibilidad de hacer el numero un decimal o un negativo
    let comprobar = document.getElementById("unidades")
    comprobar = comprobar.split("-").join("")
    if(comprobar!="")
        document.getElementById("unidades").value = comprobar
    

    //Soluciona el error de tener el resultado negativo
    let comprobarTotal = total.innerHTML.split("-").join("")
    if(comprobarTotal!="")
        document.getElementById("total").value = parseFloat(comprobarTotal).toLocaleString('es-ES',{style: "currency", currency: "EUR"})
}