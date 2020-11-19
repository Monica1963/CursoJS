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

