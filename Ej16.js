// Ejerciocio 16

// Cree dos variables booleanas llamadas isSunnyDay y isHomeworkCompleted. Asígneles un valor.
//  Utilice el Operador Ternario para imprimir que Jesse puede salir a jugar, si ambas variables son verdaderas.
//  Si uno de ellos o los dos son falsos, Jesse se queda en casa.

let isSunnyDay = true;
let isHomeworkCompleted = false;

let result =
  isSunnyDay && isHomeworkCompleted
    ? "Jesse puede salir a juga"
    : "Jesse se queda en casa";

console.log(result);
