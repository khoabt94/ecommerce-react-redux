import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { InputField, SelectField } from "../components/index";
import { userActions } from "../slice/userSlice";

const optionSex = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const schema = yup.object({
  userName: yup
    .string()
    .required("Please input your username")
    .min(6, "No less than 6 letters")
    .max(20, "No longer than 20 letters"),
  fullName: yup
    .string()
    .required("Please input your fullname")
    .min(6, "No less than 6 letters")
    .max(20, "No longer than 20 letters"),
  sex: yup.string().required("Please choose an option"),
  address: yup.string().required("Please input your address"),
  password: yup.string().required("Please input your password"),
  passwordretype: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const RegisterPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        userName: "",
        fullName: "",
        sex: "",
        address: "",
        password: "",
        passwordretype: "",
      }}
      // validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          dispatch(userActions.userRegister());
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="pt-24 pb-5 page-container">
            <h2 className="py-5 mb-8 text-5xl font-bold text-center border-b-2 border-gray-300">
              Register
            </h2>
            <div className=" w-[500px] mx-auto">
              <InputField
                name="userName"
                id="userName"
                placeholder="Please input your username..."
                label="Username"
                type="text"
              />
              <InputField
                name="fullName"
                id="fullName"
                placeholder="Please input your fullname..."
                label="Fullname"
                type="text"
              />
              <SelectField
                options={optionSex}
                name="sex"
                label="Gender"
                placeholder="Please select your gender..."
              />
              <InputField
                name="address"
                id="address"
                placeholder="Please input your address..."
                label="Address"
                type="text"
              />
              <InputField
                name="password"
                id="password"
                placeholder="Please input your password..."
                label="Password"
                type="password"
              />
              <InputField
                name="passwordretype"
                id="passwordretype"
                placeholder="Please retype your password..."
                label="Retype Password "
                type="password"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 mt-2 text-center text-white capitalize transition-all bg-gray-400 rounded-lg hover:bg-yellow-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
