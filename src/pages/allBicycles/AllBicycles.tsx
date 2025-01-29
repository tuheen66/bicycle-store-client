import BicycleCard from "../../components/bicycleCard/BicycleCard";
import { TBicycle } from "../../components/featuredBicycles/FeaturedBicycles";
import { useGetAllBicyclesQuery } from "../../redux/features/products/productsApi";
import cycles from "../../assets/images/allCycles.jpg"

const AllBicycles = () => {
  const { data: bicycles } = useGetAllBicyclesQuery(undefined);

  return (
    <div className="mb-8">
      <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[500px] w-[90%] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cycles})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            
          </h2>
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold my-8">All Bicycles</h2>
      <div className="grid grid-cols-3 gap-12 w-[90%] mx-auto mt-8">

        {bicycles?.data.map((item: TBicycle) => (
          <BicycleCard key={item._id} item={item}></BicycleCard>
        ))}
      </div>
     
    </div>
  );
};

export default AllBicycles;
