import React, { useState } from 'react'

import './no-of-primes.styles.scss'
import CustomButton from '../custom-button/custom-button.components'
import FormInput from '../form-input/form-input.component'
import useFormValidation from '../../utils/useFormValidation'
import FORM_VALIDATION_RULES from '../../utils/formValidationRules'
import primesArray from '../../utils/primesArray'
import primesProduct from '../../utils/primesProduct'
import ProductTable from '../product-table/product-table.component'

const {calulatePrimesProduct} = FORM_VALIDATION_RULES

const NoOfPrimesForm = () => {
    const initialFormState = { no_of_primes: '1' };
    const [ products, setProducts ] = useState(null)
    const [ primes, setPrimes] = useState(null)
    const calculatePrimesProductFunction = () => {
        const arrayOfPrimes = primesArray(values.no_of_primes)
        setPrimes(arrayOfPrimes)
        setProducts(primesProduct(arrayOfPrimes))
    }

    const goBack = () => {
        setProducts(null)
    }
    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, calulatePrimesProduct, calculatePrimesProductFunction);

        return (
            <div>
                { products ? (
                    <div className="container">
                        <div className="row mt-5 pt-5">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <CustomButton onClick={() => goBack()}>Go Back</CustomButton>
                                <ProductTable arrayOfPrimes={primes} arrayOfProducts={products}/>
                            </div>
                            <div className="col-sm-1"></div>

                        </div>
                    </div>
                    
                ) : (
                    <div className="signin">
                    <div className="container">
                        <div className="row mt-5 pt-5">
                            <div className="col-md-3 col-sm-12 col-lg-3"></div>
                            <div className="col-md-6 col-sm-12 col-lg-6">
                                <div className="legend"><h3>Input the number of primes</h3></div>
                                <form onSubmit={handleSubmit}>
                                    <FormInput handleChange={handleChange} handleBlur={handleBlur}  
                                    value={values.no_of_primes} min="1" label="No Of Primes" 
                                    name="no_of_primes" type="number" required/>
                                    {errors.no_of_primes && <p className="error-text">{errors.no_of_primes}</p>}
                                    
                                    <div className="button">
                                        <CustomButton disabled={isSubmitting} type="submit">Calculate</CustomButton>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 col-sm-12 col-lg-3"></div>
                        </div>
                        
                    </div>
                </div>

                )}
            </div>

    )
}

export default NoOfPrimesForm