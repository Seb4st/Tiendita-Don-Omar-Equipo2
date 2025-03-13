<?php
echo 'entro';
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $Nombre = $_POST['Nombre'];
    $Email = $_POST['Email'];
    $Fecha= $_POST['Fecha'];
    $Contrasena= $_POST['Contrasena'];
    $Confirmar_contrasena= $_POST['Confirmar_contrasena'];
    echo'Entro';

    if($Contraseña==$Confirmar_contraseña){
        $datos = "Nombre: $Nombre, Correo: $Email, Contraseña: $Contrasena\n\n";

        $archivo = "Usuarios.txt";

        $manejador = fopen($archivo,'a');
    
        if(fwrite($manejador,$datos))
        {
    
        } else
        {
            echo "Error al guardar el registro";
        }
        fclose($manejador);
    }
    else{
        echo "La contraseña no coincide";
    }
    
}
else
{
    echo "No se recibieron datos del formulario";
}
?>