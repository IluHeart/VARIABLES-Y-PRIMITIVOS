//Ejercicio 32

// USAMOS "setTimeout(function () {"CONTENIDO"} ) , "X tiempo" )" para pedir que espere antes de imprimir la funcion.

function sayHelloName(Callback) {
  setTimeout(function () {
    console.log("Hola");
    Callback();
  }, 1000);
}

function printName() {
  console.log("Ilies");
}

sayHelloName(printName);

// INTENTE HACERLO ASI PERO NO FUNCIONO

// function SayIn60sec() {
//     console.log(sayHelloName(printName))
// }

// setTimeout(SayIn60sec , 1000)
