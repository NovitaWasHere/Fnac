 fetch("http://localhost/fnacRevamp/clases/basesDatos/api.php")
        .then((response) => response.json())
        .then(data => {
            console.log(data);

            let producto = "";

            for (let i=0; i<data.length;i++){
                producto += '<a href="producto.php" class="producto">\n' +
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
                    '                   <p>Descripción breve del producto. Como la descripción puede ocupar varias líneas, es importante que no sobrepase las 3. Pero su verdadero máximo son cinco líneas de texto.</p>' +
                    '               </div>\n' +
                    '               <div class="precio">\n' +
                    '                   <p>' + data[i][0] + '</p>\n' +
                    '               </div>' +
                    '           </a>';
            }

            document.getElementById("productos").innerHTML += producto;
        })