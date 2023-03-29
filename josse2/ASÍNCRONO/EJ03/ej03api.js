window.addEventListener('load', codigo);


function codigo() {
    document.getElementById('boton').addEventListener('click', asincrona);

    function asincrona() {
        fetch('cd_catalog.json')
        .then(response => response.json())
        .then(data => {
        for(const value of data.CD){
        document.getElementById('resultado').innerHTML += value.ARTIST+'<br>';
        }
        })
        .catch(error => console.error(error));  
    }
}