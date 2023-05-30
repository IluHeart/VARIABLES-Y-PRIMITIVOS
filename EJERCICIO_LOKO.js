// **INT**

// Write a function that takes an array of objects as a parameter, each object represents a car with the following properties: brand, model, year.
// The function should return a new array of strings that contains the brand and model of each car made from the 2000s, in the format ["brand model"].
// Print the new array.

// Crear el aray con 3 objetos
const coches = [
  { marca: "Peugeot", modelo: "208", fabricacion: 2023 },
  { marca: "Renault", modelo: "Clio", fabricacion: 1999 },
  { marca: "Daewoo", modelo: "Matiz", fabricacion: 2004 },
];

// Creo mi funcion
function Coche(coches) {
  
  let filtro = coches
    .filter((coche) => coche.fabricacion >= 2000)
    .map((coche) => `${coche.marca} ${coche.modelo}`);

    let lista1 = filtro.join(" - ");

    return lista1;
}

console.log(Coche(coches));

//

const Autos = [
  { marca: "Peugeot", modelo: "208", fabricacion: 2014 },
  { marca: "Renault", modelo: "Clio", fabricacion: 2021 },
  { marca: "Daewoo", modelo: "Matiz", fabricacion: 1998 },
];

function Vehiculos(Autos) {
  let filtro = Autos.filter(function (Vehiculos) {
    return Vehiculos.fabricacion >= 2000;
  }).map(function (Vehiculos) {
    return Vehiculos.marca + " " + Vehiculos.modelo;
  });

  let lista2 = filtro.join(" - ");

  return lista2;
}

console.log(Vehiculos(Autos));