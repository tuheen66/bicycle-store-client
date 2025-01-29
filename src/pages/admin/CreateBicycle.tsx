/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateBicyclesMutation } from "../../redux/features/products/productsApi";
import { TBicycle, TResponse } from "../../redux/types/global";



const CreateBicycle = () => {
  const { register, handleSubmit, reset } = useForm<TBicycle>();

  const [createBicycle] = useCreateBicyclesMutation();

  const onSubmit: SubmitHandler<TBicycle> = async (data) => {
    const toastId = toast.loading("Creating...");

    const bicycleData = {
      ...data,
      inStock: true,
    };

    console.log(bicycleData);

    try {
      const res = (await createBicycle(bicycleData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Bicycle created", { id: toastId });
        reset();
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <div className="bg-gray-200 w-[60%] mx-auto px-4 py-8 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* name and brand row */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="p-2 w-72 rounded-lg "
              id="name"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="p-2 w-72 rounded-lg"
              id="brand"
              {...register("brand")}
            />
          </div>
        </div>

        {/* image */}
        <div className=" gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="image">
              Product Image
            </label>
            <input
              type="text"
              className="p-2 w-full rounded-lg"
              id="image"
              {...register("image")}
            />
          </div>
        </div>

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

        {/* type and model row */}

        <div className="flex justify-center items-center gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <label>Category</label>
            <select {...register("type")} className="p-2 w-72 rounded-lg">
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="BMX">BMX</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              className="p-2 w-72 rounded-lg"
              id="model"
              {...register("model")}
            />
          </div>
        </div>

        {/* text area */}
        <div className="  mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description")}
              id="description"
              className="textarea"
            ></textarea>
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

export default CreateBicycle;
