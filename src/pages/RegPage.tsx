import React from "react";
import { lendLogo, banner } from "../assets/img/index";
import { useAuthStore } from "../components/steps/authStore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toastr from "toastr";

interface FormValues {
  name: string;
  email: string;
  password: string | number;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(5, "Too Short!").required("Password is required"),
});

const RegPage: React.FC = () => {
  const { setPage } = useAuthStore();
  const initialValues: FormValues = { name: "", email: "", password: "" };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      localStorage.setItem("userData", JSON.stringify(values));
      setPage("login");
      console.log("Form Data Saved:", values);
      toastr.success("Registration successful!");
    } catch (error) {
      toastr.error("Error saving to localStorage");
    }
    setSubmitting(false);
  };

  return (
    <div className="py-16 px-5 md:px-48 text-primary">
      <div>
        <img src={lendLogo} width={100} height={50} alt="Lend Logo" />
      </div>
      <div className="md:flex mt-24">
        <div className="hidden md:flex">
          <img src={banner} alt="Banner" />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3 items-start md:w-1/2">
              <h1 className="text-[30px] font-bold">Welcome!</h1>
              <p className="text-[16px] py-2 text-prime">
                Enter details to Register.
              </p>

              <div className="w-full h-14">
                <Field
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 p-2 rounded outline-0"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm font-light"
                />
              </div>

              <div className="w-full h-14">
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded outline-0"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm font-light"
                />
              </div>

              <div className="w-full h-14">
                <Field
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 p-2 rounded outline-0"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm font-light"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full shadow bg-secondary p-2 rounded text-pure font-medium cursor-pointer mt-2"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>

              <div className="flex gap-2 font-medium text-[12px] py-1">
                <p>Have an account?</p>
                <p
                  className="text-secondary cursor-pointer"
                  onClick={() => setPage("login")}
                >
                  Login
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegPage;
