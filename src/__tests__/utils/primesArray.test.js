import primesArray from "../../utils/primesArray";

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

describe('The primes array utility', () => {
    it('return an array', async () => {
        const response = primesArray(10)
        expect(response).toBeType('array')
    });

})
