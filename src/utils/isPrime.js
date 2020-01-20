//function to check if a given number is prime
const isPrime = num => {
    let max = Math.sqrt(num);
    for(let i = 2; i <= max; i++) {
      if(num % i === 0 ) {
        return false;
      }
    }
    return num !== 1 && num !==0 && num > 0 ;
}
export default  isPrime