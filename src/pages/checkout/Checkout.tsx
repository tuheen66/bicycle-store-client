/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetSingleBicyclesQuery } from "../../redux/features/products/productsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { TBicycle, TResponse } from "../../redux/types/global";
import { useEffect, useState } from "react";
import { useCreateOderMutation } from "../../redux/features/orders/ordersApi";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";
import { toast } from "sonner";

const Checkout = () => {
  const { id } = useParams();
  const [totalValue, setTotalValue] = useState(0);
  const { register, handleSubmit, watch, reset } = useForm<TBicycle>();
  const { data: bicycle } = useGetSingleBicyclesQuery(id);
  const [createOrder] = useCreateOderMutation();
  const user = useAppSelector(useCurrentUser);

  const quantity = watch("quantity", 1); // Default quantity to 1

  useEffect(() => {
    if (bicycle) {
      const total = bicycle.data.price * quantity;
      setTotalValue(total);
    }
  }, [bicycle, quantity]);

  const onSubmit:SubmitHandler<TBicycle> =async (data) => {
    const toastId = toast.loading("Creating...");

    const orderInfo = {
      email: user?.email,
      product: bicycle.data._id,
      quantity: Number(data?.quantity),
      totalPrice: totalValue,
    };
console.log(orderInfo)

try {
    const res = (await createOrder(orderInfo)) as TResponse<any>;
    console.log(res);
    if (res.error) {
      toast.error(res.error.data.message, { id: toastId });
    } else {
      toast.success("Order created", { id: toastId });
      reset();
    }
  } catch (err) {
    toast.error("something went wrong", { id: toastId });
  }
};


  

  return (
    <div className="bg-gray-200 w-[50%] mx-auto  pb-4 my-8 rounded-lg">
      <h1 className="mb-2 text-2xl font-bold text-center text-gray-700">
        Order Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* name and brand row */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col gap-1">
            <label className="" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={bicycle?.data.name}
              type="text"
              className="px-2 py-1 w-72 rounded-lg "
              id="name"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="brand">Brand</label>
            <input
              defaultValue={bicycle?.data.model}
              type="text"
              className="px-2 py-1 w-72 rounded-lg"
              id="brand"
              {...register("brand")}
            />
          </div>
        </div>

        {/* price and quantity row */}

        <div className="flex justify-center items-center gap-8 mt-2">
          <div className="flex flex-col gap-1">
            <label className="" htmlFor="price">
              Price $
            </label>
            <input
              defaultValue={bicycle?.data.price}
              type="number"
              className="px-2 py-1 w-72 rounded-lg"
              id="price"
              {...register("price")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="quantity">Quantity</label>
            <input
              defaultValue={1}
              type="number"
              className="px-2 py-1 w-72 rounded-lg"
              id="quantity"
              {...register("quantity")}
            />
          </div>
        </div>

        {/* type and model row */}

        <div className="flex justify-center items-center gap-8 mt-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="totalPrice">Total value</label>
            <input
              type="number"
              className="px-2 py-1 w-72 rounded-lg"
              id="totalPrice"
              value={totalValue}
              {...register("totalPrice")}
              readOnly
            />
          </div>

          <button
            className=" bg-[#316881]  py-1 rounded-lg w-72  border-none text-white  mt-6 hover:bg-[#0d4763] "
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
