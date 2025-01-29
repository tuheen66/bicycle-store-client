import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";
import { useGetCustomerOrdersQuery } from "../../redux/features/orders/ordersApi";
import { TOrder } from "../../redux/types/global";

const CustomerOrders = () => {
  const user = useAppSelector(useCurrentUser);
  const email = user?.email;
  const { data: orders } = useGetCustomerOrdersQuery(email);

  return (
    <div className="w-[60%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>

              <th>Order Id</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>

          <tbody>
            {orders?.data.map((item: TOrder, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{item._id}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrders;
