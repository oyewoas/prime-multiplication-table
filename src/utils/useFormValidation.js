/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";


// hook to validate all forms
// accepts initial state for values, validation funtion, 
// and method to run when there are no errors
const useFormValidation = (initialState, validate, runOnSubmit) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    // touched is an array of all fields that have 
    // been touched by the user
    const [touched, setTouched] = useState([]);
    const [isSubmitting, setSubmitting] = useState(false);

    // use effect runs on intial component load 
    // and every time the errors object changes
    useEffect(() => {
        // only call form submission if submit was hit
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            // only call form submission if there are no errors
            if (noErrors) {
                // clear out touched upon submission
                setTouched([]);
                // run form submission when no errors
                runOnSubmit();
                setSubmitting(false);
                setValues(initialState)
            } else {
                setSubmitting(false);
            }
        }
        // reasons behind my opinions to not memoize functions
        // isSubmitting also would trigger extra render if added
    }, [errors]);

    // need to rerun after there is a changed to touched or values
    // this checks to see if there are any errors 
    // that should be highlighted
    useEffect(() => {
        const validationErrors = validate(values);
        const touchedErrors = Object.keys(validationErrors)
            .filter(key => touched.includes(key))
            .reduce((acc, key) => {
                if (!acc[key]) {
                    acc[key] = validationErrors[key]
                }
                return acc
            }, {})
        setErrors(touchedErrors);
    }, [touched, values]);

    // handle change is run every time an input changes
    const handleChange = (event) => {
        const target = event.target;
        let { name, value } = target
        name = target.name;
        setValues({
            ...values,
            [name]: value
        });
    }

    // handle blur is run when a form is tapped or 
    // tabbed into/ 'touched'
    const handleBlur = (event) => {
        // if touched hasn't been touched before add it to the array
        if (!touched.includes(event.target.name)) {
            setTouched([
                ...touched,
                event.target.name
            ])
        }
    }

    // function for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }

    // return values from hook to be used in react form component
    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    };
}

export default useFormValidation;