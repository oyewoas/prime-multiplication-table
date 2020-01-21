//function to generate the products of prime numbers

const primesMultiplication = arrayOfPrimes => {
    let multiplicaitonArray = arrayOfPrimes.map((rowPrimeNumber, rowIndex) => {
      return arrayOfPrimes.map((columnPrimeNumber, columnIndex) => {
        return rowPrimeNumber * columnPrimeNumber;
      })
    })
    return multiplicaitonArray;
}

export default  primesMultiplication

