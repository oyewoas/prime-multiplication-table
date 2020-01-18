//function to generate the products of prime numbers

export const primeProduct = listOfPrimes => {
    let productArray = listOfPrimes.map((rowPrimeNumber, rowIndex) => {
      return listOfPrimes.map((columnPrimeNumber, columnIndex) => {
        return rowPrimeNumber * columnPrimeNumber;
      })
    })
    return productArray;
}