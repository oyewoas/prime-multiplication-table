// validate function
// pass in the values object
const calulatePrimesProduct = (values) => {
    // initialize errors object
    let errors = {};
  
    // if errors exist for each field then add them to the errors object
  
    if (!values.no_of_primes) {
      errors.no_of_primes = "No of Primes is required";
    }
    return errors
  }

  const FORM_VALIDATION_RULES = {
    calulatePrimesProduct
  }

  export default FORM_VALIDATION_RULES