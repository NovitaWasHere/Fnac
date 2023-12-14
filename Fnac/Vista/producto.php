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
    <script src="js/javaScriptProducto.js" async></script>
</head>
<body>

    <?php

    include "includes/header.php"

    ?>

    <div class="contenedor">
        <div class="contenedorDatos">
            <div class="titulo">
                <h2 id="nombre">Producto</h2>
                <div class="contenedorImagen">
                    <div class="imagen">
                        <img id="foto" src="" title="">
                    </div>
                </div>
            </div>
            <div class="caract">
                <h3 id="marca">Características: </h3>
                <div class="caractElem1">
                    Tamaño de pantalla ("):
                </div>
                <div class="caractElem">
                    Tipo de procesador:
                </div>
                <div class="caractElem1">
                    Fabricante del procesador:
                </div>
                <div class="caractElem">
                    RAM:
                </div>
                <div class="caractElem1">
                    Disco duro:
                </div>
                <div class="caractElem">
                    Tamaño del disco duro:
                </div>
                <div class="caractElem1">
                    Sistema operativo:
                </div>
                <div class="caractElem">
                    Puertos USB:
                </div>
            </div>
            <div class="cajaPrecio">
                <div class="precio">
                    <h3 id="precioFinal"></h3>
                </div>
                <div class="infoMetodo">
                    <div class="info">
                        <p>Págalo a plazos desde</p><p id="plazos"></p><p>en 14 meses.</p>
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
                    <a href="#">
                        <div class="compraClic">
                            Comprar en un clic
                        </div>
                    </a>
                    <a href="#">
                        <div class="cesta">
                            Añadir a la cesta
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