import module from "./RegistrationForm.module.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import {register } from "../../redux/auth/operations";

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "The name is too short")
        .required("Name is a required field"),
    email: Yup.string()
        .email("Email format is incorrect")
        .required("Email is a required field"),
    password: Yup.string()
        .min(6, "The password is too short")
        .required("Password is a required field"),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        
        actions.resetForm();
    };

    return (
        <div className={module.formDiv}>
            <h1 className={module.formHeader}>Sign Up</h1>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={module.form}>
                    <label className={module.formLabel}>
                        <Field placeholder="Name" className={module.input} type="name" name="name" />
                        <ErrorMessage className={module.error} name="name" component="span" />
                    </label>
                    <label className={module.formLabel}>
                        <Field placeholder="Email" className={module.input} type="text" name="email" />
                        <ErrorMessage className={module.error} name="email" component="span" />
                    </label>
                    <label className={module.formLabel}>
                        <Field placeholder="Password" className={module.input} type="password" name="password" />
                        <ErrorMessage className={module.error} name="password" component="span" />
                    </label>
                    <button className={module.formButton} type="submit">Sign up</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;