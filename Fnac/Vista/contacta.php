<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
    <link rel="icon" href="img/icons/fnac-logo.ico">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/estilosPrueba.css">
    <link rel="stylesheet" href="css/contacta.css">
    <link rel="stylesheet" href="css/estilosPrueba.css">
    <script src="https://kit.fontawesome.com/9f04fd84f4.js" crossorigin="anonymous"></script>
    <script src="js/index.js"></script>
</head>
<body>
<?php
include "includes/header.php"
?>
    <div class="container-form">
        <div class="info-form">
            <h2>Contáctanos</h2>
            <p>Fnac es la primera marca distribuidora en Europa de productos tecnológicos y culturales, y constituye un ejemplo único de alianza entre comercio, cultura y tecnología. Literatura, música, cine, videojuegos, imagen, sonido, nuevas tecnologías y productos para la cocina, el hogar y el cuidado personal, convergen en un lugar de compra, asesoramiento, descubrimiento y encuentro.
                Fnac nació en 1954 en Francia y en 2016 se unió a la cadena Darty para formar el Grupo Fnac Darty. En 2019 el grupo incorporó la marca de productos sostenibles Nature&Découvertes.
                Actualmente, cuenta con una red de 880 establecimientos repartidos entre Francia, España, Portugal, Suiza, Bélgica, Luxemburgo, Marruecos, Qatar, Costa de Marfil, Congo, Camerún y Túnez</p>
            <a href="#"><i class="fa fa-phone"></i> Tel:123-456-789</a>
            <a href="#"><i class="fa fa-envelope"></i> Correo:correo@gmail.com</a>
            <a href="#"><i class="fa fa-map-marked"></i> Lugar:Ciudad, Pais</a>
        </div>
        <form action="contactos.php" method="post" autocomplete="off" >
    <input type="text" name="nombre" placeholder="Tu Nombre" class="campo">
    <input type="email" name="email" placeholder="Tu Email" class="campo"> <!-- Corrige el tipo de input "emal" a "email" -->
    <textarea name="mensaje" placeholder="Tu Mensaje..."></textarea>
    <input type="submit" name="enviar" value="Enviar Mensaje" class="btn-enviar">
</form><br>
</div>
<?php
    include "includes/footer.php"
?>
</body>
</html>
