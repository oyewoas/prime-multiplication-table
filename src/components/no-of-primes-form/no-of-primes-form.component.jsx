import React from 'react'

import './no-of-primes.styles.scss'
import CustomButton from '../custom-button/custom-button.components'
import FormInput from '../form-input/form-input.component'




const NoOfPrimesForm = () => {

        return (
            <div className="signin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <div className="legend"><span>Input the number of primes</span></div>
                            <form>
                                <FormInput value="" min="1" label="No Of Primes" name="no-of-primes" type="number" required/>

                                
                                <div className="button">
                                    <CustomButton type="submit">Calculate</CustomButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                    </div>
                    
                </div>
            </div>
    )
}

export default NoOfPrimesForm