import { Link } from "react-router-dom";
import { useGetAllBicyclesQuery } from "../../redux/features/products/productsApi";
import BicycleCard from "../bicycleCard/BicycleCard";

export type TBicycle = {
  _id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
  description: string;
  model: string;
  quantity: number;
  inStock: boolean;
};

const FeaturedBicycles = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);

  if (isLoading) {
    <p>Loading....</p>;
  }

 

  const featuredBicycles = (bicycles?.data ?? []).slice(0, 6);

  return (
    <div className="my-8">
      <h2 className="text-center mb-8 text-3xl font-semibold">
        Featured Bicycles
      </h2>
      <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBicycles.map((item: TBicycle) => (
          <BicycleCard key={item._id} item={item}></BicycleCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/all-bicycles">
          <button className="btn  bg-[#316881]  rounded-lg w-40  border-none text-white  mt-6 hover:bg-[#0d4763] ">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBicycles;
