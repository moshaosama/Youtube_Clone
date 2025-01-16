import { Link } from "react-router";
import FormInput from "../Components/FormInput";

const Login = () => {
  const formConfig = {
    FormInputs: [
      {
        Title: "email",
        Type: "email",
      },
      {
        Title: "password",
        Type: "password",
      },
    ],
  };
  return (
    <>
      <div className=" w-full h-full flex justify-center items-center bg-gradient-to-b from-red-500  ">
        <div className="bg-white rotate-6 max-sm:w-80 max-sm:rounded-xl max-sm:rotate-0 shadow-2xl hover:rounded-xl shadow-red-700 hover:rotate-0 transition-all duration-500">
          <div className="bg-white max-sm:w-80 max-sm:rounded-xl max-sm:rotate-0 w-fit p-4 -rotate-6 hover:rounded-xl   hover:rotate-0 transition-all duration-500">
            <div className="font-bold text-3xl text-gray-700 text-center">
              Login
            </div>
            <form action="">
              {formConfig.FormInputs.map((el, index) => (
                <FormInput
                  key={index}
                  Title={el.Title}
                  Type={el.Type}
                  Name={el.Title}
                />
              ))}
              <div className="mx-11 font-semibold text-gray-600 hover:underline">
                <Link to={""}>Forget Password? </Link>
              </div>
            </form>

            <div className="flex flex-col items-center justify-center">
              <button className="bg-gradient-to-r from-red-500 to-black p-2 w-52 rounded-2xl text-white font-bold my-5">
                Login
              </button>

              <p>
                Don't have any account?{" "}
                <Link to={"/SignUp"} className="text-red-500 font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
