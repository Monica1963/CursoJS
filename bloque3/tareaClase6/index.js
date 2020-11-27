const concatenar = () =>{
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const apellido = document.getElementById("apellido").value.toUpperCase();

    document.getElementById("nombreCompleto").value = nombre.concat(" " + apellido);

}