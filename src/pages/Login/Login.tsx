import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";

//#e67e22

//#d35400

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "admin123",
    },
  });

  const [login, { data, error }] = useLoginMutation();

  console.log("data=>", data);
  console.log("error=>", error);

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    login(userInfo);

    console.log(data);
  };

  return (
    <div className="flex w-[80%] mx-auto items-center ">
      {/* <Helmet>
        <title>Heartsync | Login</title>
      </Helmet> */}
      <div className=" lg:w-[50%] bg-gray-300 p-8  mx-auto text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form-action">
          <div className="w-full">
            <label className="pl-4 " htmlFor="email">
              Your email:
            </label>
            <input
              {...register("email")}
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="Your email"
              id="email"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 " htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              
              {...register("password")}
              id="password"
            />
            {/* <span
              // onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span> */}
          </div>

          <input
            className=" bg-[#e67e22] py-2 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#d35400] "
            type="submit"
            value="Login"
          />
        </form>

        <div className="text-center mt-4 space-y-2">
          <p className="flex justify-center items-center">
            Sign In with
            <span
              //   onClick={handleGoogleSignIn}
              className="text-[#eb4d4b] font-bold mx-2 cursor-pointer hover:underline"
            >
              {/* <GoogleSignIn></GoogleSignIn> */}
            </span>
          </p>
          <p>
            New to this site? Please
            <Link to="/" className="font-bold ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
