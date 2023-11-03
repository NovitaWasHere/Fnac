<?php

require "clases/Avion.php";
require "clases/basesDatos/Bd.php";
require "clases/funciones.php";

if (isset($_GET["id"])){
    $idRecib = ($_GET["id"]);
    $avion = new Avion();
    $avion->retornoJSONUno($idRecib);
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Producto</title>
    <link rel="stylesheet" href="css/estilosHeader.css">
    <link rel="stylesheet" href="css/estilosFooter.css">
    <link rel="stylesheet" href="css/estilosProducto.css">
    <script src="js/javaScriptProducto.js" async></script>
</head>
<body>

    <?php

    include "includes/header.php"

    ?>

    <div class="contenedor">
        <div class="contenedorImagen">
            <div class="imagen">
                <img id="foto" src="" title="">
            </div>
        </div>
        <div class="contenedorDatos">
            <div class="titulo">
                <h2 id="nombre">Datos generales</h2>
            </div>
            <div class="caract">
                <div class="caract">
                    <h3 id="marca">Características: </h3>
                    <ul>
                        <li>Tamaño de pantalla ("): </li>
                        <li>Tipo de procesador: </li>
                        <li>Fabricante del procesador: </li>
                        <li>RAM: </li>
                    </ul>
                </div>
            </div>
            <div class="cajaPrecio">
                <div class="precio">
                    <h3 id="precioFinal"></h3>
                </div>
                <div class="info">
                    <p id="plazos">Págalo a plazos desde</p>
                    <p>Elige el método de pago al finalizar tu compra.</p><a href="#">Ver condiciones legales*.</a>
                </div>
                <div class="botonesPago">
                    <a href="#">
                        <div class="compraClic">
                        </div>
                    </a>
                    <a href="#">
                        <div class="cesta">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <?php
        include "includes/footer.php"
    ?>
</body>
</html>