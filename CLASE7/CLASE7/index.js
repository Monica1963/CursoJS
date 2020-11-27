const handlerInput = (id) => {
  const element = document.getElementById(id);
  element.value.trim() === ""
    ? (element.style.border = "2px solid red")
    : (element.style.border = "2px solid green");
};
const sub = (e) => {
  e.preventDefault(); // Evita el comportamiento de enviar la información al servidor
  // validación
  console.log("estoy validando");
  // asincronismo
};

const comprobarElementos = (node) => {
  console.log(node.children.length);
  node.children.length === 0 ? alert("no hay elementos disponibles") : null;
};

const eliminar = (id) => {
  console.log(id);
  const father = document.querySelector("#table");
  const child = document.getElementById(id);
  father.removeChild(child);
  comprobarElementos(father);
};

const verifyPassword = () => {
  const p1 = document.getElementById("password").value;
  const p2 = document.getElementById("password2").value;
  const span = document.querySelector("#messagePassword");
  if (p1 === p2) {
    // si p1 es estrictamente distinto de p2
    span.innerHTML = "";
  } else {
    span.innerHTML = "<h2>Amigo, la password es incorrecta<h2>";
  }
};

const move = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  document.querySelector("#messageMouse").innerHTML = `X: ${x} Y: ${y}`;
  if (x === y) {
    alert("Ajá encontraste el tesoro");
  }
};

function start() {
  console.log("%c holisssss", "color:tomato");

  // accederAlElemento.addEventListener

  document.getElementById("nombre").addEventListener("blur", function () {
    handlerInput("nombre");
  }); // emmiter -> observer
  document
    .getElementById("password")
    .addEventListener("blur", () => handlerInput("password")); // emmiter -> observer
  document
    .getElementById("email")
    .addEventListener("blur", () => handlerInput("email")); // emmiter -> observer

  document
    .getElementById("password2")
    .addEventListener("input", verifyPassword);
  document.getElementById("form").addEventListener("submit", sub);
  document.querySelector("#box").addEventListener("mousemove", move);
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
}

/*
setInterval(() => {
  limpiarFormulario();
}, 3000);

*/

// start();
// Ciclos de vida -> init
window.onload = start; // Cuando el DOM este cargado se ejecuta la funci´n start;

// document
