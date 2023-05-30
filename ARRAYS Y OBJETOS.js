const arrayDeAlumnos = [
  {
    name: "Manuel",
    apellido: "Benitez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
  {
    name: "Sergio",
    apellido: "Paez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
  {
    name: "Wilmer",
    apellido: "Perez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
];

function imprimirApellido(arreglo) {
  console.log("El apellido es: ", arreglo);
}
arrayDeAlumnos.forEach((alumno, index) => {
  console.log(alumno.name, `Esta en el indice ${index}`);

  imprimirApellido(alumno.apellido);
});
