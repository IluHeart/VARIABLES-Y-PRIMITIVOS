const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function refactorNumbersArray(arrayNumbers) {
  const newArray = [];

  arrayNumbers.forEach((number) => {
    //Inizializo la varible isPrime como true
    var isPrime = true;

    //Si le numero es igual o mayor a dos entro al if
    if (number >= 2) {
      //Divido cada numero, por los numeros anteriores pero no por si mismo

      let i = 2;
      while (i < number) {
        if (number % i === 0) {
          isPrime = false;
        }
        i++;
      }
    } else {
      isPrime = false;
    }
    if (isPrime) newArray.push(number);
  });

  return newArray;
}
// remplazamos el parametro "number" por "numbers" que es nuestro array de numeros 
const resultado = refactorNumbersArray(numbers);
console.log(resultado);
