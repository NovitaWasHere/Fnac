<?php

class Avion
{

    private $id;
    private $nombre;
    private $marca;
    private $largo;
    private $alas;
    private $areaAla;
    private $altura;
    private $motor;
    private $velCruc;
    private $capacidad;
    private $capMax;
    private $foto;
    private $fuenteFoto;

    /**
     * @param $id
     * @param $nombre
     * @param $marca
     * @param $largo
     * @param $alas
     * @param $areaAla
     * @param $altura
     * @param $motor
     * @param $velCruc
     * @param $capacidad
     * @param $capMax
     * @param $foto
     * @param $fuenteFoto
     */

    public function __construct($id = "", $nombre = "", $marca = "", $largo = "", $alas = "", $areaAla = "", $altura = "", $motor = "", $velCruc = "", $capacidad = "", $capMax = "", $foto = "", $fuenteFoto = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->marca = $marca;
        $this->largo = $largo;
        $this->alas = $alas;
        $this->areaAla = $areaAla;
        $this->altura = $altura;
        $this->motor = $motor;
        $this->velCruc = $velCruc;
        $this->capacidad = $capacidad;
        $this->capMax = $capMax;
        $this->foto = $foto;
        $this->fuenteFoto = $fuenteFoto;
    }

    public function insertar($datos, $foto = "")
    {
        $conexion = new Bd();
        if ($foto != "") {
            $conexion->insertarElemento("avion", $datos, "img/", $foto) or die ("No se pudo conectar a la base de datos.");
            print_r($foto);
        } else {
            $conexion->insertarElemento("avion", $datos) or die ("No se pudo conectar a la base de datos.");
        }
    }
    public function retornoJSONUno($id)
    {
        $conexion = new Bd();

        $sql = "SELECT * from avion WHERE id=".$id;

        $res = $conexion->consulta($sql);

        $result = fopen('avion.json', 'w');
        fwrite($result,json_encode($res));
        fclose($result);
    }

    public function updateAvion($columna, $id){
        $conexion = new Bd();

        if(isset($_GET[$id])){
            $sql = "UPDATE avion SET ".$columna." = ".$id;
        }

        $conexion->update();

        $conexion = null;
    }

    public function updateAvionSinFoto($columna, $id){
        $conexion = new Bd();

        if (isset($_GET[$id])){
            $sql = "UPDATE avion SET ".$columna." = ".$id;
        }

        $conexion->consultaSimple($sql);

        $conexion = null;
    }

    public function borrarAvion($avionID){
        $conexion = new Bd();

        $sql = 'DELETE FROM avion WHERE id =' . $avionID . ';';

        $conexion->consultaSimple($sql);

        $conexion = null;
    }

    public function listarJSON(){
        $conexion = new Bd();

        $sql = "SELECT * from avion order by nombre asc";
        $res = $conexion->consulta($sql);

        $aviones = array();

        foreach ($res as $re){
            $aviones[] = $re;
        }

        return $aviones;

        $conexion = null;
    }

    public function __toString()
    {
        return $this->id;
    }
}