window.addEventListener('load', codigo);


function codigo() {
    let select = document.createElement('select');

    fetch('provincias.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var arrayProvincias = data;
        let cont = 1;
        for (const value of arrayProvincias) {
            document.getElementById('provincia').innerHTML+='<option value="'+(cont++)+'" id="'+value.id+'">'+value.nm+'</option>'
        }

        document.getElementById('provincia').addEventListener('change', eligeProvincia);

        function eligeProvincia() {
            document.getElementById('municipio').innerHTML='<option value="0">Seleccione antes una provincia</option>';
            var provinciaElegida = this.value;
           fetch('municipios.json')
           .then(function(response){
            return response.json();
           })
           .then(function(data){
            var arrayMunicipios = data;
            console.log(provinciaElegida);
            
            if (provinciaElegida!=='0') {
                document.getElementById('municipio').disabled = false;
            }

            if (provinciaElegida==='0') {
                document.getElementById('municipio').disabled = true;
                document.body.innerHTML='';
                location.reload();
            }

           

            for (const valor of document.getElementsByTagName('option')) {
                if (valor.value === provinciaElegida) {
                    for (const value of arrayMunicipios) {
                        if (!value.id.search('^'+valor.id+'')) {
                            document.getElementById('municipio').innerHTML+='<option value="'+(cont++)+'" id="'+value.id+'">'+value.nm+'</option>'
                            document.getElementById('municipio').addEventListener('change', eligeMunicipio);
                        }
                    }
                }
            }

            function eligeMunicipio() {
                console.log(this[this.selectedIndex].id);
                document.getElementById('resultado').innerHTML=this[this.selectedIndex].id;
            }

           })
           .catch(function(error){
            console.error(error);
           })
          

        }

    })
    .catch(function(error){
       return console.error(error);
    })
    
}