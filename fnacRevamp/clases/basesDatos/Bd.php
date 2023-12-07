<?php

class Bd{
    private $server = "localhost";
    private $usuario = "root";
    private $pass = "";
    private $basedatos = "comparador";

    private $conexion;
    private $resultado;

    public function __construct(){

        $this->conexion = new mysqli($this->server, $this->usuario, $this->pass , $this->basedatos);
        $this->conexion->select_db($this->basedatos);
        $this->conexion->query("SET NAMES 'utf8'");

    }

    public function consulta($sql){
        $this->resultado = $this->conexion->query($sql);
        $res = $this->resultado;
        return $res->fetch_all();
    }

    public function consultaSimple($sql){
        $this->resultado = $this->conexion->query($sql);
        $res = $this->resultado;
        return $res;
    }

    public function insertarElemento($tabla, $datos,$carpeta="",$foto=""){

        $claves  = array();
        $valores = array();

        foreach ($datos as $clave => $valor){
            if($clave != "id") {
                $claves[] = $clave;
                $valores[] = "'" . $valor . "'";
            }
        }

        if($foto != ""){

            $ruta = subirFoto($foto,$carpeta);
            $claves[] = "foto";
            $valores[] = "'".$ruta."'";
        }

        $sql = "INSERT INTO ".$tabla." (".implode(',', $claves).") VALUES  (".implode(',', $valores).")";
        //INSERT figuras (nombre,unidades,pintada,desscripcion....) VALUES ('figura1','43',.....)
        echo $sql;
        $this->resultado = $this->conexion->query($sql) or die ("No se pudo conectar con la base de datos.");
        $res = $this->resultado;
        return $res;
    }

    public function update($tabla, $datos, $id, $foto=""){
        $claves  = array();
        $valores = array();

        foreach ($datos as $clave => $valor){
            if($clave != "id") {
                $claves[] = $clave;
                $valores[] = "'" . $valor . "'";
            }
        }

        if($foto == ""){
            updateSinFoto($claves, $valores, "", );
        } else {
            $sql = "UPDATE" . $tabla . "SET" . $clave . " WHERE id = " . $id;
        }
    }

    public function updateSinFoto($claves, $valores,$carpeta="",$foto=""){
        $ruta = subirFoto($foto,$carpeta);
        $claves[] = "foto";
        $valores[] = "'".$ruta."'";
    }
    /*
    public function modificar($array, $id) {
        if (count($array) > 0) {
            foreach ($array as $key => $value) {
                $value = mysql_real_escape_string($value);
                $value = "'$value'";
                $updates[] = "$key = $value";
            }
        }
        $implodeArray = implode(', ', $updates);
        $sql = ("UPDATE user WHERE id=$id SET $implodeArray");
        mysql_query($sql,$this->_db) or die(mysql_error());
        mysql_close();
    }
    */
}