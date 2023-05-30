// Ejercicio 31

//He copido la funcion edel ejercicio anterior

function sayHelloName(Callback) {
  console.log("Hola");
  Callback();
}

function printName() {
  console.log("Ilies");
}

sayHelloName(printName);

//Con "Callback" consegimos darle coma valor a un paramentro una funcion que creemos despues.
