import { useGetAllOrdersQuery } from "../../redux/features/orders/ordersApi";

const GetAllOrders = () => {
  const { data } = useGetAllOrdersQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1>GetAllOrders component page </h1>
    </div>
  );
};

export default GetAllOrders;
