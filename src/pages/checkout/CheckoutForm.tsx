/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBicyclesQuery } from "../../redux/features/products/productsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { TBicycle, TResponse } from "../../redux/types/global";
import { useEffect, useState } from "react";
import { useCreateOderMutation } from "../../redux/features/orders/ordersApi";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { toast } from "sonner";
import { useGetCustomerProfileQuery } from "../../redux/features/auth/authApi";
import { setTotalPrice } from "../../redux/features/price/checkoutSlice";

const CheckoutForm = () => {
  const { id } = useParams();
  const [price, setPrice] = useState(0);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, reset } = useForm<TBicycle>();
  const { data: bicycle } = useGetSingleBicyclesQuery(id);
  const [createOrder] = useCreateOderMutation();
  const user = useAppSelector(useCurrentUser);
  const { data: customer } = useGetCustomerProfileQuery(user?.email);

  const navigate = useNavigate();

  const quantity = watch("quantity", 1); // Default quantity to 1

  useEffect(() => {
    if (bicycle) {
      const total = bicycle.data.price * quantity;
      setPrice(total);
    }
  }, [bicycle, quantity]);

  const onSubmit: SubmitHandler<TBicycle> = async (data) => {
    const toastId = toast.loading("Creating...");

    const orderInfo = {
      email: user?.email,
      product: bicycle.data._id,
      quantity: Number(data?.quantity),
      totalPrice: price,
    };

    try {
      const res = (await createOrder(orderInfo)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Order created", { id: toastId });
        dispatch(setTotalPrice({ totalPrice: price }));
        reset();
        navigate("/checkout");
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 w-[90%] mx-auto mt-8">
      <div className="flex justify-center items-center">
        <img className="w-full  lg:w-[90%] shadow-xl shadow-gray-400 rounded-xl " src={bicycle?.data.image} alt="" />
      </div>
      <div className="bg-gray-200 w-full lg:w-[80%] mx-auto  pb-4 my-8 rounded-lg">
        <h1 className="mb-2 text-2xl font-bold text-center text-gray-700">
          Order Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Customer name and email and brand row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col  gap-1">
              <label className="pl-2 font-semibold" htmlFor="customer">
                Customer Name
              </label>
              <input
                defaultValue={customer?.data[0].name}
                type="text"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg "
                id="customer"
                {...register("customer")}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="email">Email</label>
              <input
                defaultValue={customer?.data[0].email}
                type="text"
                className="px-2 py-1  w-80 lg:w-72 rounded-lg"
                id="email"
                {...register("email")}
              />
            </div>
          </div>
          {/* product name and brand */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-2">
            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="name">
                Product Name
              </label>
              <input
                defaultValue={bicycle?.data.name}
                type="text"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg "
                id="name"
                {...register("name")}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="brand">Brand</label>
              <input
                defaultValue={bicycle?.data.brand}
                type="text"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg"
                id="brand"
                {...register("brand")}
              />
            </div>
          </div>

          {/*model and type */}

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-2">
            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="model">
                Model
              </label>
              <input
                defaultValue={bicycle?.data.model}
                type="text"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg "
                id="model"
                {...register("model")}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="type">Category</label>
              <input
                defaultValue={bicycle?.data.type}
                type="text"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg"
                id="type"
                {...register("type")}
              />
            </div>
          </div>

          {/* price and quantity row */}

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-2">
            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="price">
                Price $
              </label>
              <input
                defaultValue={bicycle?.data.price}
                type="number"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg"
                id="price"
                {...register("price")}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="quantity">Quantity</label>
              <input
                defaultValue={1}
                type="number"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg"
                id="quantity"
                {...register("quantity")}
              />
            </div>
          </div>

          {/* type and model row */}

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-2">
            <div className="flex flex-col gap-1">
              <label className="pl-2 font-semibold" htmlFor="totalPrice">Total value</label>
              <input
                type="number"
                className="px-2 py-1 w-80 lg:w-72 rounded-lg"
                id="totalPrice"
                value={price}
                {...register("totalPrice")}
                readOnly
              />
            </div>

            <button
              className=" bg-[#316881]  py-1 rounded-lg w-full lg:w-72  border-none text-white  mt-6 hover:bg-[#0d4763] "
              type="submit"
            >
              ORDER NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
