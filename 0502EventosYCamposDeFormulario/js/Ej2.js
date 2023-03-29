
function calcularPrecio(){

    let unidades=document.getElementById("unidades").value
    let precio=document.getElementById("precio").value
    let format = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })
    document.getElementById("total").innerText=format.format(unidades*precio)
}