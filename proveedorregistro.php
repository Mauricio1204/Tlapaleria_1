<?php
require 'conexion.php';
//recibir datos 
$NO =$_GET['NO'];
$NOMBRE =$_GET['NOMBRE'];
$TEL =$_GET['TEL'];
$EMAIL =$_GET['EMAIL'];

 $sql = "INSERT INTO proveedor VALUES ($NO, '$NOMBRE', '$TEL', '$EMAIL')";
 //  echo "".$sql;
   $conexion->query($sql);
   if ($conexion->affected_rows>=1) {
   	echo "fila insertada";
   }
   else {
   	echo "error";
   }
?>