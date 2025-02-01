/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/auth/user/userApi";
import { toast } from "sonner";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};
export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};

const Register = () => {

  const navigate=useNavigate()
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const [registerUser] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");
    console.log(data);

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        id: toastId,
      });
      return;
    }

    try {
      const res = (await registerUser(userData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("User Registered", { id: toastId });
        navigate('/login')
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className=" w-[80%] mx-auto items-center justify-center">
      {/* <Helmet>
        <title>Heartsync | Register</title>
      </Helmet> */}
      <div className=" md:w-[70%] lg:w-[50%] bg-gray-300 p-8  mx-auto text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Register</h2>

        <form
          // onSubmit={handleRegister}
          className="form-action"
        >
          <div className="w-full">
            <label className="pl-4 " htmlFor="name">
              Your name:
            </label>
            <input
              {...register("name")}
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="Your name"
              id="name"
            />
          </div>

          <div className="w-full">
            <label className="pl-4 " htmlFor="email">
              Your email:
            </label>
            <input
              {...register("email")}
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="email"
              placeholder="Your email"
              name="email"
              id="email"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 " htmlFor="password">
              Password:
            </label>
            <input
              {...register("password")}
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <button
            onClick={handleSubmit(onSubmit)}
            className="btn  bg-[#316881] py-2 w-full border-none text-lg mt-6 text-white rounded-lg hover:bg-[#0d4763] "
            type="submit"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4 space-y-2">
          <p>
            Already have and account? Please
            <Link to="/login" className="font-bold ml-2 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
