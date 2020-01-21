import isPrime from "../../utils/isPrime"


describe('The isPrime Utitlity', () => {

    it('return false if the input is a prime number', async () => {
        const response = isPrime(1)
        expect(response).toEqual(false)
    });
    it('return true if the input is a prime number', async () => {
        const response = isPrime(2)
        expect(response).toEqual(true)
    })

})
