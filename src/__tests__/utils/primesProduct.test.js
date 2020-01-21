import primesProduct from "../../utils/primesProduct";


expect.extend({
	toBeType(received, argument) {
		const initialType = typeof received;
		const type = initialType === "object" ? Array.isArray(received) ? "array" : initialType : initialType;
		return type === argument ? {
			message: () => `expected ${received} to be type ${argument}`,
			pass: true
		} : {
			message: () => `expected ${received} to be type ${argument}`,
			pass: false
		};
	}
});

describe('The product of primes utility', () => {
    it('return an array', async () => {
        const response = primesProduct([2,5,7,9])
        expect(response).toBeType('array')
    });

})
