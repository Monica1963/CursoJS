const valorBuscado = 2020;
let array = [];

const buscarNumeros = (array) =>{
   
    //Parseo a int
    for (let i = 0; i < array.length; i++) {
        array[i] = Number.parseInt(array[i]);
    }

    //recorro el vector buscando los numeros que suman 2020 y muestro dichos numeros y su producto
    for(let i=0; i< array.length-1; i++){
        
      
        for(let j=i+1; j< array.length; j++){
            
            if((array[i] + array[j]) == valorBuscado){
                const num1 = array[i];
                const num2= array[j];

                document.getElementById("buscado").innerHTML += (`Valores encontrados: ${num1}  y ${num2} `);
                document.getElementById("buscado").innerHTML += (`<br>${num1} * ${num2}= ${num1*num2}`);
               
            }
        }
    
    }
}

const armarArray = (contenido) =>{
    //armo el array con el archivo leido
    array = contenido.toString().split("\n");
}

//Lectura del archivo
function leerArchivo(e) {
   const archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    const lector = new FileReader();
    lector.onload = function(e) {
      const contenido = e.target.result;
      //armarArray(contenido);
      mostrarContenido(contenido);
           
    };
    lector.readAsText(archivo);
    
  }
  
  function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
    
    armarArray(contenido);
  
    buscarNumeros(array);
  }
  
  document.getElementById('file-input').addEventListener('change', leerArchivo, false);