let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')
//Para que se abra el menu responsive

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
    

/* Form */

/* variables */
const email = document.querySelector('#email')
const nombre = document.querySelector('#nombre')
const mensaje = document.querySelector('#mensaje')

/* Botones */

const btnEnviar = document.querySelector('#enviar')


escuchadorEventos()

function escuchadorEventos(){
    document.addEventListener('DOMContentLoaded', iniciarWebApp)
    
    email.addEventListener('blur', validarinformacion)
    nombre.addEventListener('blur', validarinformacion)
    mensaje.addEventListener('blur', validarinformacion)
}

function iniciarWebApp(){
    console.log('Iniciando Web App!')
    btnEnviar.disabled = true
}

function validarinformacion(elemento){
    //console.log('te saliste del input')
    if(elemento.target.value.length > 0){
        console.log('Si hay info')
        elemento.target.classList.remove('error-mostrar')
        elemento.target.classList.add('correcto')
    }
    else{
        console.log('no hay info')
        elemento.target.classList.remove('correcto')
        elemento.target.classList.add('error-mostrar')
        mostrarError()
    }

    
}

function mostrarError(){
    
}