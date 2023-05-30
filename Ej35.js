// Ejercicio 35

// let personName = "Cosimo"

function canPlay() {
  let sport = " Football";

  //Antes la variable solo estaba declarada
  //dentro del "if" lo que hacia que solo y unicamente
  //puediese ser usada dentro de el , agragando
  //"This" antes conseguimos que se relacionene ente si

  if (true) {
    this.personName = "Cosimo";
  }

  console.log(this.personName + sport);
}

canPlay();
