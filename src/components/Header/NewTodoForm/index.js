import React from "react";
import { Formik, Field, Form } from "formik";
import validateSchema from "./validations";

function NewTodoForm() {
  return (
    <Formik
      initialValues={{
        Text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        bag.resetForm();
      }}
      validateSchema={validateSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="Text"
          name="Text"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
