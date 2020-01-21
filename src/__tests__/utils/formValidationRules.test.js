import FORM_VALIDATION_RULES from "../../utils/formValidationRules";

const {calulatePrimesProduct} = FORM_VALIDATION_RULES

describe('The form validation rules Utitlity', () => {
    it('return error message if there is no Number of Primes Input', async () => {
        const response = calulatePrimesProduct({no_of_primes: ''})
        expect(response.no_of_primes).toEqual('No of Primes is required')
    });
    it('return error message as undefined if there is Number of Primes Input', async () => {
        const response = calulatePrimesProduct({no_of_primes: 5})
        expect(response.no_of_primes).toEqual(undefined)
    })

})
