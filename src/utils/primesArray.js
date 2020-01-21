import isPrime from './isPrime'

//Function to list the first N primes into an array

const primesArray = noOfPrimes => {
  let primesArray = [];
  for (let i = 2; noOfPrimes > 0; i++) {
    if (isPrime(i)) {
      primesArray.push(i);
      --noOfPrimes;
    }
  }
  return primesArray;
}


export default primesArray