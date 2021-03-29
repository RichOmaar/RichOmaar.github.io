<?php

class controladorPlantilla{

    public function obtenerPlantilla(){
        include 'vista/plantilla.php';
    }

    public static function ruta(){
        return 'http://localhost:8888/GitHub/CODERHOUSEJS/PROYECTO-CODERHOUSE/';
    }
}

?>