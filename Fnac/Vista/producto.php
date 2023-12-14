<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Producto</title>
    <link rel="icon" href="img/icons/fnac-logo.ico">
    <link rel="stylesheet" href="css/estilosProducto.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/estilosPrueba.css">
    <script src="https://kit.fontawesome.com/9f04fd84f4.js" crossorigin="anonymous"></script>
    <script src="js/index.js"></script>
</head>
<body>

    <?php

    include "includes/header.php"

    ?>

    <?php
    $id = $_GET['id'];

    echo '<div class="contenedor">
        <h1 id="idProductoUnico" style="display: none"> '. "$id". '</h1>
        <div class="contenedorDatos">
            <div class="titulo">
                <h2 id="nombre"></h2>
                <div class="contenedorImagen">
                    <div class="imagen" id="imagenP">
                 
                    </div>
                </div>
            </div>
            <div class="caract">
                <h3 id="marca">Características: </h3>
                <div class="caractElem">
                    <h2 style="color: #0a141d;text-align: center">Nombre del producto</h2>
                </div>
                <div class="caractElem1" id="caractElem1">

                </div>
                <div class="caractElem">
                    <h2 style="color: #0a141d;text-align: center">Descripción del producto</h2>
                </div>
                <div class="caractElem1" id="caractElem3">

                </div>
            </div>
            <div class="cajaPrecio">
                <div class="precio">
                    <h3 id="precioFinal"></h3>
                </div>
                <div class="infoMetodo">
                    <div class="info">
                    <div id="ptext"><p style="display: none">Págalo a plazos desde</p><p id="plazos"></p></div>
                    </div>
                    <div class="metodo">
                        <p>Elige el método de pago al finalizar tu compra.</p><a href="#">Ver condiciones legales*.</a>
                    </div>
                </div>
                <div class="socio">
                    <input type="checkbox">
                    <h4>Hazte socio TECH+CULTURA</h4>
                    <p></p>
                    <p>Hasta -5% en tus compras y envío gratis ilimitado (14,90€ al año)</p>
                </div>
                <div class="botonesPago">
                    <button>
                        <div id="boton">
                            Añadir a la cesta
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>'


    ?>

    <br>  <br>

    <?php
        include "includes/footer.php"
    ?>
</body>
</html>