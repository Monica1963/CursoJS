const usuario = {};

const concatenar = () =>{
    document..preventDefault();
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const apellido = document.getElementById("apellido").value.toUpperCase();

    //document.getElementById("nombreCompleto").value = nombre.concat(" ", apellido);

    //usando un objeto
    Object.assign(usuario, {nombre, apellido});

    document.getElementById("nombreCompleto").value = Object.values(usuario).join(" ");
    console.log(document.getElementById("nombre"));
}