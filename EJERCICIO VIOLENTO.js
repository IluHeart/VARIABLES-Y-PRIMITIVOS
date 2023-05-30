var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function encontrarNumerosPrimos(numeros) {
  // Creo mi array vacio, para guardar mis numeros primos
  var numerosPrimos = [];
  // Recorro mi array de numeros
  for (var i = 0; i < numeros.length; i++) {
    // Guardar mi numero, en la posicion i, en una nueva variable
    var numero = numeros[i];
    // Numero es mayor a uno?
    if (numero > 1) {
      var esPrimo = true;
// Dividir mi numero, por los numeros anteriores pero no por si mismo
      for (var j = 2; j < numero; j++) {
        // El resto de la division es 0?
        if (numero % j === 0) {
          esPrimo = false;
          break;
        }
      }
    }
    if (esPrimo) {
      numerosPrimos.push(numero);
    }
  }
  return numerosPrimos;
}

var primos = encontrarNumerosPrimos(numeros);
console.log(primos);