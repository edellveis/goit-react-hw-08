import style from "./ConctactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactProfileShema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
export default function ContactForm() {
  const INITIAL_VALUES = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactProfileShema}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span>Name</span>
          <Field className={style.input} type="text" name="name" />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={style.label}>
          <span>Phone</span>
          <Field className={style.input} type="text" name="number" />
          <ErrorMessage
            className={style.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={style.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
