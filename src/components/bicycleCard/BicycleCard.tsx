import { Link } from "react-router-dom";
import { TBicycle } from "../featuredBicycles/FeaturedBicycles";

interface BicycleCardProps {
  item: TBicycle;
}

const BicycleCard: React.FC<BicycleCardProps> = ({ item }) => {
  console.log({ item });

  return (
    <div className="card bg-base-300 shadow-xl shadow-gray-500 border">
      <div className="rounded-xl relative">
        <img className="p-3 rounded-3xl" src={item.image} />
        <div className="absolute top-5 left-5 bg-orange-500 text-white rounded-md p-1">${item.price}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <p><span className="font-semibold">Brand:</span> {item.brand}</p>
        <p><span className="font-semibold">Model:</span> {item.model}</p>
        <p><span className="font-semibold">Category:</span> {item.type}</p>
        <div className="card-actions">
          <Link to={`/single-bicycles/${item._id}`}>
          <button className="btn btn-sm bg-[#316881]  rounded-lg w-full border-none text-white  mt-6 hover:bg-[#0d4763] ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
