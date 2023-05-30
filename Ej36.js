// Ejercicio 36

// Al declarar la variable "sport" fuera de la funcion
//se conviente en una variable global.

let sport = "Football";

function canPlay() {
  //  var sport = "Football";

  if (true) {
    this.personName = "Ilies";

    // let personName = "Ilies"
    // console.log(personName + " " + sport)
  }

  console.log(this.personName + " " + sport);
}

canPlay();

console.log(sport);
