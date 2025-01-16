import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [FormData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const Navigation = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/signup", FormData)
      .then((res) => {
        console.log("Success:", res.data);
        Navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formConfig = {
    FormInputs: [
      {
        Title: "userName",
        Type: "text",
      },
      {
        Title: "email",
        Type: "email",
      },
      {
        Title: "password",
        Type: "password",
      },
      {
        Title: "passwordCheck",
        Type: "password",
      },
    ],
  };

  return (
    <>
      <div className=" w-full h-full flex justify-center items-center bg-gradient-to-b from-red-500  ">
        <div className="bg-white rotate-6 max-sm:w-80 max-sm:rounded-xl hover:rounded-xl max-sm:rotate-0 shadow-2xl shadow-red-700 hover:rotate-0 transition-all duration-500">
          <div className="bg-white w-fit max-sm:w-80 max-sm:rounded-xl hover:rounded-xl max-sm:rotate-0  p-4 -rotate-6   hover:rotate-0 transition-all duration-500">
            <div className="font-bold text-3xl text-gray-700 text-center">
              Sign Up
            </div>
            <form action="">
              {formConfig.FormInputs.map((el, index) => (
                <FormInput
                  key={index}
                  Title={el.Title}
                  Type={el.Type}
                  Name={el.Title}
                  onChange={handleChange}
                />
              ))}
            </form>

            <div
              className="flex flex-col items-center justify-center"
              onClick={handleSubmit}
            >
              <button className="bg-gradient-to-r from-red-500 to-black p-2 w-52 rounded-2xl text-white font-bold my-5">
                Sign Up
              </button>

              <p>
                Already have an account?{" "}
                <Link to={"/Login"} className="text-red-500 font-bold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
