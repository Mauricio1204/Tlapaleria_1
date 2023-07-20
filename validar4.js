function validar4() {

   var no, nombre, direccion, correo;
   no:document.getElementById("no").value;
   nombre:document.getElementById("nombre").value;
   direccion:document.getElementById("direccion").value;
   tel:document.getElementById("tel").value;
   correo:document.getElementById("correo").value;
   expresion =/\w+@\w+\.+[a-z]/;
   if (no === ""  || nombre ==="" ||direccion===""||correo==="") {
   	alert("campo bacio");
   	return false;}

   	   else if (id.legth>=10){
   	   	alert("correo");
   	   	return false;
   	   }

   	   else if (nombre.legth>=50){
   	   	alert("campo bacio");
   	   	return false;
   	   }

   	   else if (direccion.legth>=50){
   	   	alert("campo bacio");
   	   	return false;
   	   }

   	   else if (tel.legth>=10){
   	   	alert("telefono bacio");
   	   	return false;
   	   }
}