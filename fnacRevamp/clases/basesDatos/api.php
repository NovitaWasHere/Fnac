<?php
require "Bd.php";
require "../Avion.php";

$avion = new Avion();
$aviones = array();
$aviones = $avion->listarJSON();
$json = json_encode($aviones);

echo $json;