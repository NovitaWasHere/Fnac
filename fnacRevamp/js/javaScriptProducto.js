window.onload = function(){

    console.log("1");

    fetch("avion.json")
        .then((response) => response.json())
        .then(data => {

            console.log(data);

            //Obtenemos os datos aquí, y comenzamos a asignar a los elementos cuyos IDs correspondan dentro del HTML los valores
            //del ID extraído. Como sólo se ha extraído un elemento y no toda la base de datos, el primer valor del array será 0 siempre.
            console.log(data[0][1]);
            document.getElementById("nombre").textContent = data[0][1] + ".";
            document.getElementById("marca").textContent = data[0][2] + ".";
            //document.getElementById("pantalla").textContent = "Tamaño de pantalla (\"): " + data[0][3] + ".";
            document.getElementsByClassName("caractElem1")[0].innerHTML = "Tamaño de pantalla (\"): " + data[0][3] + ".";
            document.getElementsByClassName("caractElem")[0].innerHTML = "Tipo de procesador: " + data[0][4] + ".";
            document.getElementsByClassName("caractElem1")[1].innerHTML = "Fabricante del procesador: " + data[0][5] + ".";
            document.getElementsByClassName("caractElem")[1].innerHTML = "RAM: " + data[0][6] + ".";
            document.getElementsByClassName("caractElem1")[2].innerHTML = "Disco duro: " + data[0][7] + ".";
            document.getElementsByClassName("caractElem")[2].innerHTML = "Tamaño del disco duro: " + data[0][8] + ".";
            document.getElementsByClassName("caractElem1")[3].innerHTML = "Sistema operativo: " + data[0][9] + ".";
            document.getElementsByClassName("caractElem")[3].innerHTML = "Puertos USB: " + data[0][10] + ".";
            document.getElementById("precioFinal").textContent = data[0][0] + "€";

            let plazos = Math.round((data[0][0]/14)*100) / 100 + "€";

            document.getElementById("plazos").textContent = plazos;

            //A la foto asignamos no sólo su src sino su título. Para el src, usamos esa foto almacenada dentro de nuestra BD, y para
            //su título el nombre del propio elemento.
            document.getElementById("foto").src = data[0][11];
            document.getElementById("foto").title = data[0][1];
        })
}