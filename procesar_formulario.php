<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $Nombre= $_POST['Nombre'];
    $Email= $_POST['Email'];
    $Mensaje= $_POST['Mensaje'];

    $datos = "Nombre: $Nombre, Correo: $Email, Comentarios: $Mensaje\n\n";

        $archivo = "Contactos.txt";

        $manejador = fopen($archivo,'a');
    
        if(fwrite($manejador,$datos))
        {
            echo "Registro guardado correctamente";
    
        } else
        {
            echo "Error al guardar el registro";
        }
        fclose($manejador);
}
else
{
    echo 'error';
}
?>