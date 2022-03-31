import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { InputField, SelectField } from "./index";

const optionQuestion = [
  { value: "products", label: "Our Products" },
  { value: "delivery", label: "Delivery Services" },
  { value: "promotions", label: "Ongoing Promotion" },
];

const schema = yup.object({
  fullName: yup
    .string()
    .required("Please input your fullname")
    .min(6, "No less than 6 letters")
    .max(20, "No longer than 20 letters"),
  email: yup
    .string()
    .required("Please input your email")
    .email("Please input a valid email"),
  service: yup.string().required("Please choose an option"),
  question: yup.string().required("Please input your question for us"),
});

const ContactCard = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        service: "",
        question: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="">
            <div className="">
              <InputField
                name="fullName"
                id="fullName"
                placeholder="Please input your fullname..."
                label="Fullname"
                type="text"
              />
              <InputField
                name="email"
                id="email"
                placeholder="Please input your email..."
                label="Email"
                type="email"
              />
              <SelectField
                options={optionQuestion}
                name="service"
                label="Your question topic"
                placeholder="Please select an option..."
              />
              <InputField
                name="question"
                id="question"
                placeholder="Please let us know your question..."
                label="Your Question"
                type="text"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 mt-2 text-center text-white capitalize transition-all bg-gray-400 rounded-lg hover:bg-yellow-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactCard;
