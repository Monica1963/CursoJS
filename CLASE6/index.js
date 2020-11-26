let contador = 0;
let numero1 = 0;
let numero2 = 0;
const ids = ["nombre", "apellido", "email", "password"];
const usuario = {};
/*
const sumar = () => {
    contador += 1;
    alert(contador);
};
const restar = () => alert(contador--);

*/
/*
const operacion = (op = "+") => {
  op === "+" ? contador++ : contador--;
  alert(contador);
};
*/
function test(e) {
  console.log(e.target.value);
}

handlerInputThis = (e) => {
  const value = e.value;
  console.log(value);
};

const handlerInputEvent = (e) => {
  const value = e.target.value;
  console.log(value);
};

// const obj = {nombre:'franco'} obj.nombre
handlerInputNumber = (e) => {
  // e.target.id
  // console.log(e.id); // e.value
  e.id === "numero1"
    ? (numero1 = parseInt(e.value))
    : (numero2 = parseInt(e.value));
};

const operacion = (op) => {
  // op -> +,-,*,/, ^, sqrt, log
  switch (op) {
    case "+":
      // numero1+ numero2
      alert(numero1 + numero2);
      break;
    case "-":
      alert(numero1 - numero2);
      break;
    case "*":
      alert(numero1 * numero2);
      break;
    case "/":
      alert(numero2 !== 0 ? numero1 / numero2 : "MATH ERROR");
      break;
    default:
      alert("operacion no permitida");
  }
};

const showPassword = () => {
  // Con cualquier evento podemos acceder a cualquier punto (nodo) del DOM
  const element = document.getElementById("password"); // "this" del elemento con id "password"
  //const name = (document.getElementById("nombre").type = "password");
  console.log(element.value);
  element.type === "text"
    ? (element.type = "password")
    : (element.type = "text");
};

const register = () => {
  const nombre = document.getElementById().value.toLowerCase() || "";
  const apellido =
    document.getElementById("apellido").value.toLowerCase() || "";
  const email = document.getElementById("email").value.toLowerCase() || "";
  const password = document.getElementById("password").value || "";

  Object.assign(usuario, {
    nombre,
    apellido,
    email,
    password,
  });
  console.log(usuario);
};
