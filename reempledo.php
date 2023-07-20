<?php 

require 'conexion.php';

   $NO=$_GET['NO'];
   $NOMBRE=$_GET['NOMBRE'];
   $CONTRASEÑA=$_GET['contraseña'];
   $DIRECCION=$_GET['direccion'];
   $EMAIL=$_GET['email'];
   $TEL=$_GET['tel'];
   $FECHAINGRESO=$_GET['fechaingre'];
   $FECHASALIDA=$_GET['fechadesali'];
   $NOCARGO=$_GET['nocargo'];

   $sql = "INSERT INTO usuempleado VALUES ($NO,'$NOMBRE','$CONTRASEÑA','$DIRECCION','$EMAIL','TEL','$FECHAINGRESO','$FECHASALIDA','$NOCARGO')";
  // echo "".sql;
$conexion->query($sql);
   if ($conexion->affected_rows>=1) {
   	echo "fila insertada";
   }
   else {
   	echo "error";
   }

 ?>