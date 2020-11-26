let num1 = 0;
let num2 = 0;

const handlerInput = (e) =>{
    e.id ==="num1" ? num1=parseInt(e.value) : num2=parseInt(e.value);
    console.log(e.value);
}


const limpiarCampos = () =>{
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    resultado.value = 0;
}

const operacion = (op="+") =>{
    switch(op){
        case '+': 
            //alert(num1 + num2);
            resultado.value = num1 + num2;
            break;
        case '-':
            resultado.value = num1 - num2;
            break;
        case '*':
            resultado.value = num1 * num2;
            break;
        case '/':
            num2 !== 0 ? resultado.value = num1 / num2 : alert("MATH ERROR");
            break;
        default:
            alert("Operación no permitida");
    }
    setTimeout(limpiarCampos, 2000);
}


