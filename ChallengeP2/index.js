// bigThreeReloaded
const buscaMayor = (a, b, c) => {
    let mayor = 0;
    a > b ? mayor = a : mayor = b;
    c > mayor ? mayor = c : null;
    return mayor;
}


// AVGReloaded
const calculaPromedio = (a, b, c) => {
    return parseFloat((a + b + c)/3).toFixed(2);
   
}

//NewArray

const newArray = (arr1, arr2) =>{
    return arr1.concat(arr2);
}

//plusX5
const suma5 =() =>{
    const valores = [];
    let suma = 0;

    for(i=0;i<5;i++){
        suma += parseInt(prompt("Ingrese un numero"));
        console.log(`${suma}`);
    }

    return suma;

}

//Si pero No
const siPeroNo = (arr1, arr2) =>{
    const newArray=[];
    
    for(let i=0;i<arr1.length;i++){
        let esta = false; //flag
       for(let j=0;j<arr2.length;j++){
        arr2[j] == arr1[i] ? esta=true : null;
       }
       esta!=true ? newArray.push(arr1[i]) : null;
   }
    return newArray;
}


//Filter
const filter = (arr) =>{
    const newArray=[];
    arr.sort();
    for(let i=0;i<arr.length;i++){
        let esta = false; //flag
       
       for(let j=i+1;j<arr.length;j++){
        arr[i] == arr[j] ? esta=true : null;
       }
       esta!=true ? newArray.push(arr[i]) : null;
      
   }
    
    return newArray;
}


//Filter con funcion includes
const filterF = (arr) =>{
    const newArray=[];
   // arr.sort();
    for(let i=0;i<arr.length;i++){
       // let esta = false; //flag
      !newArray.includes(arr[i]) ? newArray.push(arr[i]) : null;
      
   }
    
    return newArray;
}


//NoLength
const contarCar= (mitexto) =>{
    let suma = 0;
    const textoSinE = mitexto.replace(/ /g, ""); //  / significa que es una exprecion regultar que busca espacios, y la /g significa que es global, es decir busca todos los espacios en la variable
    console.log(textoSinE);
    for (item in textoSinE){ 
        suma++;
        
    }
    return suma;
}


//WalterWhite
const contarEspacios = (mitexto) =>{
    let contador = 0;
    for(let i=0; i < mitexto.length; i++){
        mitexto[i] == " " ? contador++ : null;
    }
    return contador;
}

//Capitalize
const capitalizar = (mitexto) =>{
   
    mitexto = mitexto.split(" ");
    
   for(let i=0; i<mitexto.length;i++){
       
        mitexto[i] = mitexto[i][0].toUpperCase() + mitexto[i].substr(1);
       // console.log(mitexto);
        
    } 
   
     
       return mitexto.join(" ");
    }

//toArray
const toArray = (str) =>{
    const arr = str.split("");
    console.log(arr);


}

//AlCesarLoQueEsDelCesar
const codificar = (num=3, str="A") =>{
    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const pattern = /[A-Za-z]/
    const arrabc = abecedario.split("");
    str = str.toUpperCase();
    const nuevoArr=[];
    
    for (letra of str){
        if(!pattern.test(letra)){
            nuevoArr.push(letra);
        }else{
            let posicion = arrabc.indexOf(letra) + num;
            posicion >= arrabc.length ? posicion=posicion-arrabc.length : null;
            const nuevaLetra = arrabc[posicion];
            nuevoArr.push(nuevaLetra);
           // console.log(nuevoArr);
        }
        
    
    }
    const arrFinal = nuevoArr.join("");
    return arrFinal;

}






    

