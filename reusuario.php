<?php 

require 'conexion.php';

$NO = $_GET['NO'];
$NOMBRE =$_GET['NOMBRE'];
$DIRECCION=$_GET["DIRECCION"];
$EMAIL=$_GET['EMAIL'];
$TEL=$_GET['TEL'];
$CLABLEACCESO=$_GET['CLABLEACCESO'];
$NOCOMPRAS=$_GET['NOCOMPRAS'];


  $sql = "INSERT INTO cliente VALUES('NO', 'NOMBRE', 'DIRECCION', 'EMAIL', 'TEL', 'CLABLEACCESO', '$NOCOMPRAS')";

  echo "".$sql;
$conexion->query($sql);
   if ($conexion->affected_rows>=1) {
   	echo "fila insertada";
   }
   else {
   	echo "error";
   }
 ?>