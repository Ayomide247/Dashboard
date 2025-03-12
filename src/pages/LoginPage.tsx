import React, { useState } from "react";
import { lendLogo, banner } from "../assets/img/index";
import { useAuthStore } from "../components/steps/authStore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {
  const { setPage } = useAuthStore();
  const initialValues: LoginFormValues = { email: "", password: "" };
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: LoginFormValues, { setSubmitting }: any) => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      const userData = JSON.parse(storedData);
      if (
        userData.email === values.email &&
        userData.password === values.password
      ) {
        toastr.success("Login successful!");
        setLoading(true);

        setTimeout(() => {
          setPage("dashboard");
          setLoading(false);
        }, 2000);
      } else {
        toastr.error("Invalid email or password");
      }
    } else {
      toastr.warning("No registered user found");
    }

    setSubmitting(false);
  };

  return (
    <div className="py-16 px-5 md:px-48 text-primary">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-secondary border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div>
            <img src={lendLogo} width={100} height={50} alt="Lend Logo" />
          </div>
          <div className="md:flex mt-24">
            <div className="hidden md:flex">
              <img src={banner} alt="Banner" />
            </div>
            <div className="flex flex-col items-start md:w-1/2">
              <h1 className="text-[30px] font-bold">Welcome!</h1>
              <p className="text-[16px] py-2 text-prime">
                Enter details to login.
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="grid items-center w-full gap-3 mt-5">
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
                      {errors.password && touched.password ? (
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-sm font-light"
                        />
                      ) : (
                        <p className="font-medium text-[12px] text-secondary cursor-pointer py-1">
                          Forgot Password?
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full shadow bg-secondary p-2 rounded text-pure font-medium cursor-pointer mt-5"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="flex gap-2 font-medium text-[12px] py-1">
                <p>Don't have an account?</p>
                <p
                  className="text-secondary cursor-pointer"
                  onClick={() => setPage("register")}
                >
                  Register
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
