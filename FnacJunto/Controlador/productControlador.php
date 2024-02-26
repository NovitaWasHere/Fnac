<?php

use Modelo\productModelo;

class productControlador
{
    public function listarProductos()
    {
        //Eligimos tabla
        $tablaBD = "Producto";
        //llamamos a la función de listar todos
        $respuesta = ProductModelo::listarProductosModelo($tablaBD);

        //Con la que devuelva esta función, haremos con un foreach toda
        //la maquetación de la página por cada registro que devuelva la función
        echo json_encode($respuesta);
    }

    public function listar()
    {
        //Eligimos tabla
        $tablaBD = "Producto";
        //llamamos a la función de listar todos
        $respuesta = ProductModelo::listar($tablaBD);

        echo json_encode($respuesta);
    }

}