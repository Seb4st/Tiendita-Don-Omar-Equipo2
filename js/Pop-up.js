document.getElementById('Registrar').addEventListener('submit',function(event){
event.preventDefault();
const formData=new FormData(this);
const Contrasena= document.getElementById('Contrasena').value;
const Confirmar_contrasena= document.getElementById('Confirmar_contrasena').value;

if(Contrasena== Confirmar_contrasena)
{
    fetch('Guardar.php',{
        method:'POST',
        body:formData
    })
    .then(Response=>Response.text())
    .then(data=>{
        Popup();
    })
    .catch(error=>{
        console.error('Error:',error)
    });
}
else
{
    Popup3();
    event.preventDefault();
}
});

function Popup(){
    const Popup=document.getElementById('Popup');
    Popup.style.display='Block';

    setTimeout(() => {
        Popup.style.display='none';
    }, 3000);
}
function Popup3(){
    const Popup=document.getElementById('Popup3');
    Popup.style.display='Block';

    setTimeout(() => {
        Popup.style.display='none';
    }, 3000);
}