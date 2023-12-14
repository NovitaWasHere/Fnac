window.onload = function (){
    // JAVASCRIPT PARA TRATAR HEADER

    let header = document.querySelector("header");
    let btnPaginasHeader = document.querySelectorAll("header nav div a");
    let cajaDesplegable = document.querySelector("#cajaDesplegable");
    let checkbox = document.querySelector(".checkbox");

    header.addEventListener("mouseenter", () => {
        cajaDesplegable.style.display="none";
    });

    for (let i=0; i<btnPaginasHeader.length; i++) {
        btnPaginasHeader[i].addEventListener("mouseenter", () => {
            cajaDesplegable.style.display="block";
        });
    }

    cajaDesplegable.addEventListener("mouseleave", () => {
        cajaDesplegable.style.display="none";
    });

    ///////////////////////////////////

    //JAVASCRIPT PARA CATÁLOGO

    fetch("http://localhost/fnacRevamp/clases/basesDatos/api.php")
        .then((response) => response.json())
        .then(data => {
            console.log(data);

            let producto = "";

            for (let i=0; i<data.length;i++){
                producto += '<a href="producto.php?id=' + data[i][0] + '" value="' + data[i][0] + '" class="producto">\n' +
                    '                <div class="imagen">' +
                    '                   <img src="logo-fnac-40.png">' +
                    '               </div>' +
                    '               <div class="nombre">\n' +
                    '                   <h3> '+ data[i][1] +'</h3>\n' +
                    '               </div>\n' +
                    '               <div class="marca">\n' +
                    '                   <p>' + data[i][2] +'</p>\n' +
                    '               </div>' +
                    '               <div class="descripcion">' +
                    '                   <p>Descripción breve del producto. Como la descripción puede ocupar varias líneas, es importante que no sobrepase las 3.</p>' +
                    '               </div>\n' +
                    '               <div class="precio">\n' +
                    '                   <p>' + data[i][0] + '</p>\n' +
                    '               </div>' + '' +
                    '               <div class="botonCarrito">' +
                    '                   <a href="#">' +
                    '                       <button>Añadir al carrito</button>' +
                    '                   </a>' +
                    '               </div>' +
                    '           </a>';
            }

            document.getElementById("productos").innerHTML += producto;
        })

    ///////////////////////////////////
}
