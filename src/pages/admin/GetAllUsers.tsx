/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import {
  useBlockUserMutation,
  useGetAllUserQuery,
} from "../../redux/features/auth/user/userApi";
import { TUser } from "../../redux/types/global";

const GetAllUsers = () => {
  const { data: users } = useGetAllUserQuery(undefined);

  const [blockUser] = useBlockUserMutation();

  

  const handleBlockUser = async (id:string) => {
    try {
      const res = await blockUser({
        id,
        isBlocked: true,
      });
      if (res.error) {
        if ("data" in res.error) {
          toast.error((res.error as any).data.message);
        } else {
          toast.error("An error occurred");
        }
      } else {
        toast("User blocked", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.data.map((item: TUser, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.isBlocked === false ? "Active" : "Inactive"}</td>

                <td>
                  <div className=" flex flex-col">
                    <button
                      onClick={() => handleBlockUser(item._id)}
                      className="btn btn-sm bg-red-600 w-28 text-white rounded-lg"
                    >
                      Block User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllUsers;
