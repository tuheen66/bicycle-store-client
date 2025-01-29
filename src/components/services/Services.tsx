// import { Wrench, ShoppingCart, Settings, Star } from "lucide-react";

import { BiStar, BiWrench } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";


const Services = () => {
 return (
 <div>
 <section className="py-16 bg-gray-200 w-[90%] mx-auto rounded-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Services We Offer</h2>
        <p className="text-gray-600 text-lg mb-10">
          Discover the range of services designed to enhance your cycling experience.
        </p>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <BiWrench className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bike Repair</h3>
            <p className="text-gray-600">
              Get your bike repaired by our expert mechanics with top-notch tools and parts.
            </p>
          </li>
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <CiSettings className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bike Customization</h3>
            <p className="text-gray-600">
              Personalize your bike with unique designs, colors, and accessories.
            </p>
          </li>
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <CgShoppingCart className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Accessories</h3>
            <p className="text-gray-600">
              Explore a range of high-quality bike accessories at affordable prices.
            </p>
          </li>
          <li className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <BiStar className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Service Plans</h3>
            <p className="text-gray-600">
              Ensure smooth rides with our regular maintenance plans.
            </p>
          </li>
        </ul>
      </div>
    </section>
</div>
 );
};

export default Services;
