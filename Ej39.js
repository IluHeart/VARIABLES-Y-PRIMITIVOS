// Ejercicio 39

let usuario = {
  name: "Cosimo",
  age: 30,
};

let clone = {};
// let clone = { ...usuario };

for (let key in usuario) {
  clone[key] = usuario[key];
}

clone.name = "Paolo";
clone.age = "54543";

console.log(usuario);

console.log(clone);
