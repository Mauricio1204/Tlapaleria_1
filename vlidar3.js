function validar3() {
 var num,nombre,tel,correo;
 num=document.getElementById("num").value;
 nombre= document.getElementById("nombre").value;
 correo= document.getElementById("correo").value;
 tel= document.getElementById("tel").value;
 expresion =/\w+@\w+\.+[a-z]/;	 
 if(num ==="" || nombre === "" || correo === "" || tel ==="") {
 	alert("campo vacio");
 }

    else if (num.length>=10) {
    	alert("EL MAXIMO DE NUMEROS ES DE 10")
    	return false;
    }
     else if (isNaN(num)) {
   alert("el ID tiene que ser un numero no registrado en la base de datos ")
   return false;
  }
    else if (nombre.length>50) {
  alert("el maximo de caracteres pemitidos es 50");
  return false;
     }

    else if(correo.expresion.test(correo)){
    	alert("el coreo no es valido");
    	return false;
    }	
else if(correo.expresion.test(correo)){
    	alert("el coreo no es valido");
    	return false;
    }
    else if (tel.length=10) {
    	alert("el numero solo debe de contener 10 dijitos")
    	return false;
    }
  else if (isNaN(tel)) {
   alert("el telefono ingresado no es un numero")
   return false;
  }



}