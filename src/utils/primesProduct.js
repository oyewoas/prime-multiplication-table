//function to generate the products of prime numbers

export const primeProduct = arrayOfPrimes => {
    let productArray = arrayOfPrimes.map((rowPrimeNumber, rowIndex) => {
      return arrayOfPrimes.map((columnPrimeNumber, columnIndex) => {
        return rowPrimeNumber * columnPrimeNumber;
      })
    })
    return productArray;
}

