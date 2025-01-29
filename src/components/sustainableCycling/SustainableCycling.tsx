import { BiGlobe, BiLeaf } from "react-icons/bi";
import { GrBike } from "react-icons/gr";

const SustainableCycling = () => {
  return (
    <div>
      <section className="py-16 bg-gray-200 w-[90%] mx-auto rounded-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Sustainable Cycling</h2>
        <p className="text-gray-600 text-lg mb-10">
          Embrace a healthier lifestyle while contributing to a cleaner, greener planet. Here's how cycling supports sustainability:
        </p>
        <ul className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <BiLeaf className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly Transport</h3>
            <p className="text-gray-600">
              Cycling produces zero emissions, reducing your carbon footprint and preserving the environment.
            </p>
          </li>
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <BiGlobe className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Promote sustainability by reducing dependency on fossil fuels and supporting greener urban mobility.
            </p>
          </li>
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <GrBike className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Health and Wellness</h3>
            <p className="text-gray-600">
              Cycling improves personal health, reduces noise pollution, and promotes sustainable living.
            </p>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default SustainableCycling;
