import BicycleCard from "../../components/bicycleCard/BicycleCard";
import { TBicycle } from "../../components/featuredBicycles/FeaturedBicycles";
import { useGetAllBicyclesQuery } from "../../redux/features/products/productsApi";
import cycles from "../../assets/images/allCycles.jpg";
import { useState } from "react";

const AllBicycles = () => {
  const { data: bicycles } = useGetAllBicyclesQuery(undefined);

  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value ? parseFloat(e.target.value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value ? parseFloat(e.target.value) : undefined);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredBicycles = bicycles?.data
    .filter((bicycle: TBicycle) => {
      const matchesSearchQuery =
        bicycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bicycle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bicycle.model.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMinPrice =
        minPrice === undefined || bicycle.price >= minPrice;
      const matchesMaxPrice =
        maxPrice === undefined || bicycle.price <= maxPrice;

      return matchesSearchQuery && matchesMinPrice && matchesMaxPrice;
    })
    .sort((a: TBicycle, b: TBicycle) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div className="mb-8">
      <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[500px] w-[90%] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cycles})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52"></h2>
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold my-8">All Bicycles</h2>

      <div className="w-[90%] mx-auto bg-gray-300 p-4 flex justify-center gap-4 rounded-lg">
        <input
          type="text"
          placeholder="Search by name, brand, or model"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-lg  "
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice !== undefined ? minPrice : ""}
          onChange={handleMinPriceChange}
          className="p-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice !== undefined ? maxPrice : ""}
          onChange={handleMaxPriceChange}
          className="p-2 border rounded-lg"
        />

        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="p-2 border rounded-lg"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-12 w-[90%] mx-auto mt-8">
        {filteredBicycles?.map((item: TBicycle) => (
          <BicycleCard key={item._id} item={item}></BicycleCard>
        ))}
      </div>
    </div>
  );
};

export default AllBicycles;
