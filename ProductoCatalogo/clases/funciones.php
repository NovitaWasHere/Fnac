<?php
// Mostrar todos los errores de PHP
error_reporting(-1);
ini_set('error_reporting', E_ALL);

function subirFoto($archivo,$directorio="img",$pesoMax = 5000000)
{
    function subirFoto($archivo, $directorio = "img", $pesoMax = 5000000)
    {
        print_r($archivo);
        $foto = "";
        $tipo = $archivo['type'];
        $tamano = $archivo['size'];

        $nombreArchivo = $archivo['name'];//  limpiar($archivo['name']);
        $nombreArchivo = cortarCadenaFinal($nombreArchivo, ".");

        if ((strpos($tipo, 'jpeg') || strpos($tipo, 'png')) && $tamano < $pesoMax) {
            $idUnico = time();

            if (strpos($tipo, 'jpeg')) {
                $extension = '.jpg';
            } else {
                $extension = '.png';
            }
            $nombre_fichero = $directorio . $nombreArchivo . $extension;
            if (file_exists($directorio . $nombreArchivo . ".jpg") || file_exists($directorio . $nombreArchivo . ".png")) {
                $nombre_fichero = $directorio . $nombreArchivo . $idUnico . $extension;
                echo $nombre_fichero;
            }
            if (move_uploaded_file($archivo['tmp_name'], $nombre_fichero)) {
                $foto = $nombre_fichero;
            } else {
                echo "<script>alert('Error al subir el archivo al servidor')</script>";
                $foto = false;
            }
        } else {

            echo "<script>alert('La foto debe tener una extensión del tipo: jpg o png')</script>";
            $foto = false;

        }

        return $foto;
    }

    function png_a_jpg($archivo)
    {
        if (is_file($archivo)) {
            $imagen = imagecreatefrompng($archivo);
            $archivo = str_replace(".png", ".jpg", $archivo);
            imagejpeg($imagen, $archivo, 100);
        }

    }

    function limpiar($cadena)
    {
        //preg_replace($patrones, $sustituciones, $cadena);

        //$archivo =  preg_replace("/[^a-zA-Z0-9\_\-]+/", "", $archivo);

        $cadena = str_replace(
            array('?', '¿'),
            array('_', '_'),
            $cadena
        );

        $cadena = str_replace(
            array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
            array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
            $cadena
        );

        $cadena = str_replace(
            array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
            array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
            $cadena);

        $cadena = str_replace(
            array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
            array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
            $cadena);

        $cadena = str_replace(
            array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
            array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
            $cadena);

        $cadena = str_replace(
            array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
            array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
            $cadena);

        $cadena = str_replace(
            array('ñ', 'Ñ', 'ç', 'Ç'),
            array('n', 'N', 'c', 'C'),
            $cadena
        );

//para ampliar los caracteres a reemplazar agregar lineas de este tipo:
//$archivo = str_replace("caracter-que-queremos-cambiar","caracter-por-el-cual-lo-vamos-a-cambiar",$archivo);
        return $cadena;
    }

    function cortarCadenaPrincipio($cadena, $caracter)
    {

// localicamos en que posición se haya la $subcadena, en nuestro caso la posicion es "7"
        $posicionsubcadena = strpos($cadena, $caracter);
// eliminamos los caracteres desde $subcadena hacia la izq, y le sumamos 1 para borrar tambien el @ en este caso
        $nombre = substr($cadena, ($posicionsubcadena + 1));
        return $nombre;

    }

    function cortarCadenaFinal($cadena, $caracter)
    {
// localicamos en que posición se haya la $subcadena, en nuestro caso la posicion es "7"
        $posicionsubcadena = strrpos($cadena, $caracter);
// eliminamos los caracteres desde $subcadena hacia la izq, y le sumamos 1 para borrar tambien el @ en este caso
        $nombre = substr($cadena, 0, ($posicionsubcadena));
        return $nombre;
    }
}
