// Ejercicio 40

let usuario = {
  name: "Cosimo",
  age: 30,
};

let clone = { ...usuario };

clone.name = "Paolo";
clone.age = "40";

console.log(usuario);

console.log(clone);
