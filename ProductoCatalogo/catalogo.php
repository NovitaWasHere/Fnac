<?php

require "clases/Avion.php";
require "clases/basesDatos/Bd.php";
require "clases/funciones.php";

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Prueba</title>
    <link rel="stylesheet" href="css/estilosCatalogo.css">
    <link rel="stylesheet" href="css/estilosHeader.css">
    <link rel="stylesheet" href="css/estilosFooter.css">
    <script src="js/scripts.js"></script>
</head>
<body>

<?php
 include "includes/header.php"
?>

<section id="catalogo">
    <div id="filtros">
        <div class="filtro">
            <h3 class="tituloFiltro">Precio</h3>
            <li><label><input class="checkbox" type="checkbox">0 - 50</label></li>
            <li><label><input class="checkbox" type="checkbox">50 - 100</label></li>
            <li><label><input class="checkbox" type="checkbox">100 - 150</label></li>
            <li><label><input class="checkbox" type="checkbox">150 - 200</label></li>
            <li><label><input class="checkbox" type="checkbox">200 - 250</label></li>
            <li><label><input class="checkbox" type="checkbox">250 - 300</label></li>
            <li><label><input class="checkbox" type="checkbox">300+</label></li>
        </div>
        <div class="filtro">
            <h3 class="tituloFiltro">Otro filtro</h3>
            <li><a href="#">Hombre</a></li>
            <li><a href="#">Mujer</a></li>
            <li><a href="#">Tecnología</a></li>
            <li><a href="#">Tomasito</a></li>
            <li><a href="#">España</a></li>
            <li><a href="#">Lockheed Martin</a></li>
            <li><a href="#">Indra</a></li>
        </div>
    </div>

    <div id="productos">

    </div>
</section>

<?php
 include "includes/footer.php"
?>

<?php

$avion = new Avion();
$avion -> listarJSON();

?>

</body>
</html>