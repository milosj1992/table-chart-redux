import {Form, Field} from 'react-final-form'
import {Link} from "react-router-dom";

const validate = (values) => {
    const errors = {}

    if (!values.year) {
        errors.year = 'Year Required'
    }
    if (!values.startingRent) {
        errors.startingRent = 'Starting Rent Required'
    }
    if (!values.effectiveRent) {
        errors.effectiveRent = 'Effective Rent Required'
    }

    return errors;
}

const initialFormSubmit = [
    {name: "year", label: "Year", placeholder: "Year"},
    {name: "effectiveRent", label: "Effective Rent", placeholder: "Effective rent"},
    {name: "startingRent", label: "Starting Rent", placeholder: "Starting rent"}
]

const RentForm = (props) => {
    return (
        <Form
            initialValues={props.initialValues}
            onSubmit={values => props.onSubmit(values)}
            validate={values => (validate(values))}
        >
            {({handleSubmit, submitting}) => (
                <form className="ui form" onSubmit={handleSubmit}>

                    {initialFormSubmit.map((fieldElement, key) =>

                        <Field name={fieldElement.name} parse={values => parseInt(values)} key={key}>
                            {({input, meta}) => (
                                <div className="field">
                                    <label>{fieldElement.label}</label>
                                    <input {...input} type="number" placeholder={fieldElement.placeholder}/>
                                    {meta.error && meta.touched && <span className="test">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    )}
                    <div>
                        <button className="ui button" disabled={submitting}>
                            Submit
                        </button>
                        <Link to={"/"}>
                            <button className="ui button red">Cancel</button>
                        </Link>
                    </div>

                </form>
            )}
        </Form>
    )
}
export default RentForm
