// Ejercicio 42

// function smartphone (marca , nombre , precio) {
// 	this.marca = marca;
// 	this.nombre = nombre;
// 	this.precio = precio;
// }

// smartphone = new smartphone ("Xiaomi" , "Redmi Note 10" , 100)

// console.log(smartphone)

function smartphone(marca, nombre, precio) {
  this.marca = marca;
  this.nombre = nombre;
  this.precio = precio;
}

smartphone = new smartphone("Xiaomi", "Redmi Note 10", 100);

console.log(smartphone);
