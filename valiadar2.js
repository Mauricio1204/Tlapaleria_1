function  validar2() {
var  correo, contraseña, expresion, nombre;
correo = document.getElementById("correo").value;
contraseña= document.getElementById("contraseña").value;
nombre=document.getElementById("nombre").value;
expresion =/\w+@\w+\.+[a-z]/;

if (nombre === "" || contraseña === "" || correo ===  ""){
  alert("campo vacio");
     return false;
                                                             }

else if (nombre.length>50) {
  alert("el maximo de caracteres pemitidos es 50");
  return false;
     }
 else if (correo.length>50) {
	alert("el maximo de caracteres pemitidos es 25");
	return false;
                                     }

else if (!expresion.test(correo)) {
      alert("el coreo no es valido");
     }
 else if (contraseña.length>10) {
	alert("el maximo de caracteres pemitidos es 10");
	return false;
}
}