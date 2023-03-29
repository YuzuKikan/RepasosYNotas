window.addEventListener('load', codigo);

function codigo() {
    document.getElementById('boton').addEventListener('click', asincrona);

    function asincrona() {
        fetch('listaCompra.xml')
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            return new DOMParser().parseFromString(data, 'application/xml');
        })
        .then(function(objXML){
            escribeResultado(objXML);
        })
        .catch(function(error){
            console.error(error);
        })

        function escribeResultado(objXML) {
            for (const value of objXML.getElementsByTagName('producto')) {
               document.getElementById('resultado').innerHTML+= value.getAttribute('cantidad')+' '+value.getAttribute('unidad')+' de '+value.innerHTML+'<br>';
            }
        }
    }
}