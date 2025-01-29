/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import {
  useDeleteBicycleMutation,
  useGetAllBicyclesQuery,
} from "../../redux/features/products/productsApi";
import { TBicycle } from "../../redux/types/global";
import { toast } from "sonner";

const AllBicycles = () => {
  const { data: bicycles } = useGetAllBicyclesQuery(undefined);
  const [deleteBicycle] = useDeleteBicycleMutation();

  console.log(bicycles?.data);

 

  const handleDeleteBicycle = async (id: string) => {
    try {
      const res = await deleteBicycle(id);
      if (res.error) {
        if ("data" in res.error) {
          toast.error((res.error as any).data.message);
        } else {
          toast.error("An error occurred");
        }
      } else {
        toast("Bicycle deleted", {
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
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Model</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bicycles?.data.map((item: TBicycle, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="">
                      <div className="mask  w-24 h-18 border-2 border-gray-300 rounded-xl">
                        <img className="w-[100%] p-2" src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.type}</td>
                <td>{item.model}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <div className=" flex flex-col">
                    <Link to={`/admin/updateBicycle/${item._id}`}>
                      <button className="btn btn-sm bg-green-700 text-white w-full">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteBicycle(item._id)}
                      className="btn btn-sm bg-red-600 text-white rounded-lg"
                    >
                      Delete
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

export default AllBicycles;
