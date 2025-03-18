document.getElementById('Login').addEventListener('submit',function(event){
    event.preventDefault();
    const Usuario= document.getElementById('Usuario').value;
    const Password= document.getElementById('Password').value;
    if(Password== 'Admin' && Usuario=='Admin')
    {
        location.href="Bienvenida.html"
    }
    else
    {
        Popup();
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