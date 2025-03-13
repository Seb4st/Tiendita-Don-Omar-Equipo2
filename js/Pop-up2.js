document.getElementById('Registrar2').addEventListener('submit',function(event){
    event.preventDefault();
    const formData=new FormData(this);
    
    fetch('procesar_formulario.php',{
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
    });
    
    function Popup(){
        const Popup=document.getElementById('Popup');
        Popup.style.display='Block';
    
        setTimeout(() => {
            Popup.style.display='none';
        }, 3000);
    }