import { Link } from "react-router-dom";
import { useGetAllBicyclesQuery } from "../../redux/features/products/productsApi";
import { TBicycle } from "../../redux/types/global";

const AllBicycles = () => {
  const { data: bicycles } = useGetAllBicyclesQuery(undefined);

  console.log(bicycles?.data);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr >
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Model</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bicycles?.data.map((item: TBicycle, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="">
                      <div className="mask  w-24 h-18 border-2 border-gray-300 rounded-xl">
                        <img className="w-[100%] p-2" src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.type}</td>
                <td>{item.model}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <div className="btn-group btn-group-vertical">
                    <Link to={`/admin/updateBicycle/${item._id}`}>
                    <button className="btn btn-sm bg-green-500 text-white">
                      Update
                    </button>
                    </Link>
                    <button className="btn btn-sm bg-red-500 text-white">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBicycles;
