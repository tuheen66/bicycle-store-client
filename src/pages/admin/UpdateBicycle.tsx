/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import {
 
  useGetSingleBicyclesQuery,
  useUpdateBicyclesMutation,
} from "../../redux/features/products/productsApi";
import { toast } from "sonner";
import { TBicycle, TResponse } from "../../redux/types/global";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateBicycle = () => {
  const { id } = useParams();

  const navigate=useNavigate()

  const { data: bicycle } = useGetSingleBicyclesQuery(id);

  const [updateBicycle] = useUpdateBicyclesMutation();



  const { register, handleSubmit, setValue, reset } = useForm<TBicycle>();

  useEffect(() => {
    if (bicycle) {
      setValue("price", bicycle.data.price);
      setValue("quantity", bicycle.data.quantity);
      // Set other default values as needed
    }
  }, [bicycle, setValue]);

  const onSubmit: SubmitHandler<TBicycle> = async (data) => {
    const toastId = toast.loading("Creating...");

    const bicycleData = {
        id: bicycle.data._id, // Ensure you have the correct id
        data: {
          price: data.price,
          quantity: data.quantity,
          
        },
      };

    try {
      const res = (await updateBicycle(bicycleData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Bicycle updated", { id: toastId });
        reset(); // Reset the form after successful submission
        navigate('/admin/allBicycle')
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };


 

  return (
    <div className="bg-gray-200 w-[60%] mx-auto px-4 py-8 rounded-lg">
      {bicycle?.data.name}

      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* price and quantity row */}

        <div className="flex justify-center items-center gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              className="p-2 w-72 rounded-lg"
              id="price"
              {...register("price")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="p-2 w-72 rounded-lg"
              id="quantity"
              {...register("quantity")}
            />
          </div>
        </div>

        <button
          className="btn bg-[#316881] py-2 rounded-lg w-full border-none text-white  mt-6 hover:bg-[#0d4763] "
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBicycle;
