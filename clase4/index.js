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


//Filter con funcion js
const filterF = (arr) =>{
    const newArray=[];
   // arr.sort();
    for(let i=0;i<arr.length;i++){
       // let esta = false; //flag
      !newArray.includes(arr[i]) ? newArray.push(arr[i]) : null;
      
   }
    
    return newArray;
}



