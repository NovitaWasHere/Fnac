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
            document.getElementById("pantalla").textContent = "Tamaño de pantalla (\"): " + data[0][3] + ".";
            document.getElementById("procesador").textContent = "Tipo de procesador: " + data[0][4] + ".";
            document.getElementById("fabPro").textContent = "Fabricante del procesador: " + data[0][5] + ".";
            document.getElementById("ram").textContent = "RAM: " + data[0][6] + ".";
            document.getElementById("dd").textContent = "Disco duro: " + data[0][7] + ".";
            document.getElementById("tamDd").textContent = "Tamaño del disco duro: " + data[0][8] + ".";
            document.getElementById("so").textContent = "Sistema operativo: " + data[0][9] + ".";
            document.getElementById("usb").textContent = "Puertos USB: " + data[0][10] + ".";

            //A la foto asignamos no sólo su src sino su título. Para el src, usamos esa foto almacenada dentro de nuestra BD, y para
            //su título el nombre del propio elemento.
            document.getElementById("foto").src = data[0][11];
            document.getElementById("foto").title = data[0][1];
        })
}