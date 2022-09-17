<? php
	//Conectamos
	$conectar = @mysql_connect('localhost','root','');
	//verificacion
	if (!$conectar) {
		# code...
		echo "No se pudo conectar";
	}else  {
		# code...
		$base = mysql_select_db('proyecto');
		if (!$base) {
			# code...
			echo "No se encontro la base";
		}
	}

	//Recuperar variables
	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$correo=$_POST['correo'];
	$contraseña=$_POST['contraseña'];
	$confirmacion=$_POST['confirmacion'];
	//sql
	$sql="INSERT INTO Datos VALUES('$nombre','$apellido','$correo','$contraseña','$confirmacion')"
	//sentencia
	$ejecutar=mysql_query($sql);
	//
	if (!$ejecutar) {
		# code...
		echo "Ocurrio algun error";
	} else {
		# code...
		echo "Datos Guardados Correctamente <br> < a href='index.html'>Volver </a> ";
	}
	
?>