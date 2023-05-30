// Ejercicio 22

let primitiva = 4234234234;

// if (typeof primitiva === 'string') {
//     console.log("Esta variable es un String")
// } else if (typeof primitiva === 'number') {
//     console.log("Esta variable es un Numero")
// } else if (typeof primitiva === 'boolean') {
//     console.log("Esta variable es una Booleano")
// }

switch (typeof primitiva) {
  case "string":
    console.log("Esta variable es un String");
    break;
  case "boolean":
    console.log("Esta variable es un boolean");
    break;
  case "number":
    console.log("Esta variable es un number");
    break;
}
