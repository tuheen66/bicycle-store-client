/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "../../redux/features/orders/ordersApi";

import { TOrder } from "../../redux/types/global";

const GetAllOrders = () => {
  const { data: orders } = useGetAllOrdersQuery(undefined);

  const [deleOrder] = useDeleteOrderMutation();

  console.log(orders);

  const handleDeleteOrder = async (id: string) => {
    try {
      const res = await deleOrder(id);
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
    <div className="w-[70%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Customer Email</th>
              <th>Order Id</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.data.map((item: TOrder, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item._id}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(item._id)}
                    className="btn btn-sm bg-red-600 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllOrders;
