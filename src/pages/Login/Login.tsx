/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";

//#e67e22
//#0882BB
//#0984e3
//#d35400

// type TUserInfo = {
//   email: string;
//   password: string;
// };

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in ...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in...", { id: toastId, duration: 2000 });

      navigate(`/`);
      // navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong...", { id: toastId, duration: 2000 });
    }
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

          <button
            className="btn bg-[#316881] py-2 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#0d4763] "
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 space-y-2">
          
          <p>
            New to this site? Please
            <Link to="/register" className="font-bold ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
