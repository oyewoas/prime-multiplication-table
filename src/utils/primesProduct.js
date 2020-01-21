//function to generate the products of prime numbers

const primesProduct = arrayOfPrimes => {
    let productArray = arrayOfPrimes.map((rowPrimeNumber, rowIndex) => {
      return arrayOfPrimes.map((columnPrimeNumber, columnIndex) => {
        return rowPrimeNumber * columnPrimeNumber;
      })
    })
    return productArray;
}

export default  primesProduct

