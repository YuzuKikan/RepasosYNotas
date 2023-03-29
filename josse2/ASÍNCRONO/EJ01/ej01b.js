window.addEventListener('load', codigo);

function codigo() {
    document.getElementById('boton').addEventListener('click', asincrono);

    function asincrono() {
        fetch('ajax_info.txt')
         .then(response => response.text())
         .then(data => console.log(data))//aqui te lo pinta
         .catch(error => console.error(error))        
    }
}

