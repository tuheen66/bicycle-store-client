import { Link } from "react-router-dom";
import { useGetCustomerProfileQuery } from "../../redux/features/auth/authApi";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";

const UserDashboard = () => {
  const user = useAppSelector(useCurrentUser);
  const { data: profile } = useGetCustomerProfileQuery(user?.email);



  return (
    <div className="flex justify-center">
      <div className="card w-96  bg-gray-300 text-gray-800">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">Name: {profile?.data[0].name}</h2>
          <p>Email :  {profile?.data[0].email}</p>
          <div className=" mt-2">
            <Link to="/change-password">
          <button
            className="btn bg-[#316881] py-2 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#0d4763] "
            
          >
            change password
          </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
