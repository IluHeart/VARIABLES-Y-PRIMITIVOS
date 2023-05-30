// Lokura NUMEROS PRIMOS

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function refactorNumbersArray(arrayNumbers) {
  const newArray = [];

  arrayNumbers.forEach((number) => {
    var isPrime = true;
    if (number >= 2) {

      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
        }
    }
    } else {
        isPrime = false
    }
    if (isPrime) newArray.push(number);
  });

  return newArray;
}
// remplazamos el parametro "number" por "numbers" que es nuestro array de numeros 
const resultado = refactorNumbersArray(numbers);
console.log(resultado);