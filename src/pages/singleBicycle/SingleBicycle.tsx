import { useParams } from "react-router-dom";
import { useGetSingleBicyclesQuery } from "../../redux/features/products/productsApi";

const SingleBicycle = () => {
  const { id } = useParams();
  const { data: bicycle, isLoading, error } = useGetSingleBicyclesQuery(id);
  console.log(bicycle?.data);

  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (error) {
    return <p>Error loading bicycle details: </p>;
  }

  console.log(bicycle);

  return (
    <div className="w-[90%] mx-auto mb-8">
      <div className="flex justify-center my-8 ">
        <h2 className="text-3xl text-center font-bold">{bicycle.data.name}</h2>
      </div>

      <div className="flex  ">
        <div className="m-8 flex-1">
          <img
            className="shadow-xl shadow-gray-300 rounded-xl"
            src={bicycle.data.image}
          />
        </div>

        <div className="  flex justify-center flex-col gap-8 flex-1 py-8">
          <p>
            <span className="font-semibold text-xl">Brand : </span>
            {bicycle.data.brand}
          </p>
          <p>
            <span className="font-semibold text-xl">Model : </span>
            {bicycle.data.model}
          </p>
          <p>
            <span className="font-semibold text-xl">Category : </span>
            {bicycle.data.type}
          </p>
          <p className="text-2xl font-bold">
            <span className="font-semibold text-xl">Price : </span> $
            {bicycle.data.price}
          </p>
          <p>
            <span className="font-semibold text-xl">Description : </span>
            {bicycle.data.description}
          </p>
          <div className=" ">
            <button className="btn bg-[#316881] py-2 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#0d4763] ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBicycle;
