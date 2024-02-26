<?php

    session_start();

    $dir_actual = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

    $direccion_esperada = "http://localhost/FnacJunto/Vista/includes/cerrarSesion.php";

    if ($dir_actual === $direccion_esperada) {
        // Destruye la sesión
        session_destroy();

        header("Location: http://localhost/FnacJunto/Vista/index.php");
        exit();

    }