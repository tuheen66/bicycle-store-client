import { useGetAllOrdersQuery } from "../../redux/features/orders/ordersApi";
import { useGetSingleBicyclesQuery } from "../../redux/features/products/productsApi";

const AdminDashboard = () => {
  const { data: orders } = useGetAllOrdersQuery(undefined);

  const totalRevenue = orders?.data?.reduce(
    (acc: number, item: { totalPrice: number }) => acc + item.totalPrice,
    0
  );

  console.log(totalRevenue);

  const productQuantities = orders?.data?.reduce((acc: { [key: string]: number }, order: { product: string; quantity: number }) => {
    acc[order.product] = (acc[order.product] || 0) + order.quantity;
    return acc;
  }, {});

  // Find the product with the highest quantity
  let bestSeller = null;
  let maxQuantity = 0;

  for (const product in productQuantities) {
    if (productQuantities[product] > maxQuantity) {
      maxQuantity = productQuantities[product];
      bestSeller = product;
    }
  }
  const { data: bicycle } = useGetSingleBicyclesQuery(bestSeller);
  console.log("best seller", bestSeller);

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="   rounded-lg text-center p-4  border-2 border-gray-500 bg-gray-300 h-40 ">
        <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
          Total Revenue
        </h4>
        <div className="flex justify-center items-center gap-8 my-4">
          <p className="text-5xl font-bold text-[#001529]">${totalRevenue}</p>
        </div>
      </div>

      <div className="  rounded-lg text-center p-4 h-40 border-2 border-gray-500 bg-gray-300 ">
        <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
          Total Orders
        </h4>
        <div className="flex justify-center items-center gap-8 my-4">
          <p className="text-5xl font-bold text-[#001529]">
            {orders?.data?.length}
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8 rounded-lg border-2 border-gray-500 bg-gray-300 p-4 ">
        <h1 className="text-xl font-semibold t">Best Seller Bicycle</h1>
        <div className="">
          <img className="rounded-lg" src={bicycle?.data.image} alt="" />
        </div>
        <p className="text-2xl font-bold text-[#001529]">
          {bicycle?.data.name}
        </p>
        <p className="text-2xl font-bold text-[#001529]">
          Total pcs sold: {maxQuantity}
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
