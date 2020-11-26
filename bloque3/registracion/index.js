let usuario = {};
const ids = ["nombre", "apellido", "email", "pass"];


const mostrarPass = () =>{
    const element = document.getElementById("pass");
    element.type == "password" ? element.type = "text" : element.type = "password";
    
}

const registrar = () =>{
    /*
    const nombre = document.getElementById("nombre").value.toLowerCase() ;
    const apellido = document.getElementById("apellido").value.toLowerCase();
    const email = document.getElementById("email").value.toLowerCase();
    const pass = document.getElementById("pass").value.toLowerCase();
    Object.assign(usuario, {nombre, apellido, email, pass})
    console.log(usuario);
    */
   
    for(id of ids){
        usuario[id] = document.getElementById(id).value.toLowerCase() ;
    }
    console.log(usuario);
}