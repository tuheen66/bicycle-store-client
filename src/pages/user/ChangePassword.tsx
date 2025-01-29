/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { TResponse } from "../../redux/types/global";
import { logout } from "../../redux/features/auth/authSlice";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className=" lg:w-[50%] bg-gray-300 p-8  mx-auto text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Update Password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form-action">
          <div className="w-full">
            <label className="pl-4 " htmlFor="oldPassword">
              Old Password
            </label>
            <input
              {...register("oldPassword")}
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              id="oldPassword"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 " htmlFor="newPassword">
              New Password:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              {...register("newPassword")}
              id="newPassword"
            />
          </div>

          <button
            className="btn bg-[#316881] py-2 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#0d4763] "
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
