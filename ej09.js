cad1 = "";
cad2 = "";
function piramide() {
    cad1 = "";
    for (i = 0; i < 20; i++) {
        for (j = 0; j <= i; j++) {
            cad1 += (i + 1) + " ";
            cad2 += (i + 1) + " ";
        }
        cad1 += "\n";
        cad2 += "<br>";
    }
    // alert(cad1);
    document.write(cad2);


}