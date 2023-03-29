window.addEventListener('load', codigo);


function codigo() {
    document.getElementById('boton').addEventListener('click', asincrona);

    function asincrona() {
        fetch('cd_catalog.xml')
        .then(function (response){
            return response.text();
        }) 
        .then(function (data){
            return new DOMParser().parseFromString(data, "application/xml");
        })
        .then(function (objXML){
            escribeResultado(objXML);
        })
        .catch(function (error){
            console.error(error);
        })

        function escribeResultado(objXML) {
            for (const value of objXML.getElementsByTagName('ARTIST')) {
                document.getElementById('resultado').innerHTML+=value.innerHTML+'<br>';
            }
        }

    }

}