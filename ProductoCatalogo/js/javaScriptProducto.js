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
            document.getElementById("marca").textContent = "Marca: " + data[0][2] + ".";
            document.getElementById("largo").textContent = "Largo: " + data[0][3] + " metros.";

            //A la foto asignamos no sólo su src sino su título. Para el src, usamos esa foto almacenada dentro de nuestra BD, y para
            //su título el nombre del propio elemento.
            document.getElementById("foto").src = data[0][11];
            document.getElementById("foto").title = data[0][1];
        })
}