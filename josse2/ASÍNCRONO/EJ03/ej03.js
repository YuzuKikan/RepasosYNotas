window.addEventListener('load', codigo);

function codigo() {
    document.getElementById('boton').addEventListener('click', asincrona);

    function asincrona() {
            let xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', muestraJSON);
            xhr.open('GET', 'cd_catalog.json');
            xhr.send();
            
            function muestraJSON() {
                if (this.readyState==4) {
                    let arrayJSON = JSON.parse(this.responseText).CD;
                    
                    for (const value of arrayJSON) {
                        document.getElementById('resultado').innerHTML += value.ARTIST + '<br>';
                    }
                    
                }

            }
        }

}