// secuencial
// paradigma funcional (React,Node,Angular,Go,PHP,Python)
// console.log() Math.random()
// prompt()
// document.write()

function mensaje() {
  document.write("Mensaje desde función");
}

function saludarUsuario(usuario) {
  document.write(`Bienvenido/a ${usuario}🧘‍♂️`);
}

function saludarCompleto(nombre, apellido) {
  if (nombre === "franco") {
    console.log("Hola frantuko ", apellido);
  } else {
    console.log(`Bienvenido/a ${nombre} ${apellido}`);
  }
}
// cargarNumeros()
const cargarNumeros = (numero) => {
  const numeros = [];
  for (let i = 0; i < numero; i++) {
    const num = parseInt(prompt("Ingresa un número"));
    numeros.push(num);
  }
};

// Las funciones solamente deben cumplir UNA tarea
const mostrarPares = (vector) => {
  const pares = [];
  for (let i = 0; i < vector.length; i++) {
    vector[i] % 2 == 0 ? pares.push(vector[i]) : null;
  }
  return pares;
};

const numerosMayores = (vector) => {
  const mayores = [];
  const menores = [];
  for (let i = 0; i < vector.length; i++) {
    vector[i] >= 10 ? mayores.push(vector[i]) : menores.push(vector[i]);
  }
  console.log(mayores, menores);
};

const comprobarEdad = (edad) => {
  if (edad >= 18) {
    return "El usuario es mayor de edad";
  } else {
    return "El usuario es menor de edad";
  }
};

const cargarCocineros = (num) => {
  // nombres de los participantes
  const participantes = [];
  for (let i = 0; i < num; i++) {
    const nombre = prompt(`Ingresa el nombre del participante ${i + 1}`);
    participantes.push(nombre);
  }
  return participantes;
};

const mostrarCocineros = (cocineros) => {
  for (let i = 0; i < cocineros.length; i++) {
    document.write(`<br>El / La cocinero/a ${i + 1} es : ${cocineros[i]}`);
  }
};

const posibleGanador = (cocineros) =>
  cocineros[Math.round(Math.random() * cocineros.length)];

const removerDuplicados = (array) => {
  const newArray = []; // retorna todos los elementos únicos [2,3,6,8]
  // vector.includes(numero)
  for (let i = 0; i < array.length; i++) {
    newArray.includes(array[i]) ? null : newArray.push(array[i]);
  }
  return newArray;
};

const reverse = (string) => {
  // métodos
  // tradicional
  const text = string.split(""); // generamos un vector a partir del string como parametro
  const rev = text.reverse();
  const finalMessage = rev.join("");
  return finalMessage;
};
