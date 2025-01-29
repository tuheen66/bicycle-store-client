import { BiCalendar } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";

const Community = () => {
  return (
    <div>
      <section className="py-16 bg-gray-200 w-[90%] mx-auto rounded-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Join Our Cycling Community
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Be a part of a vibrant community of cycling enthusiasts. Share your
            passion, explore new adventures, and stay connected!
          </p>
          <ul className="space-y-8">
            <li className="flex items-center justify-center space-x-4">
              <FaUsers className="w-12 h-12 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Connect with Cyclists
                </h3>
                <p className="text-gray-600">
                  Meet fellow cyclists, exchange tips, and share your cycling
                  stories.
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center space-x-4">
              <BiCalendar className="w-12 h-12 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Join Events</h3>
                <p className="text-gray-600">
                  Participate in group rides, workshops, and community events
                  tailored for cyclists.
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center space-x-4">
              <CgMail className="w-12 h-12 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Stay Updated
                </h3>
                <p className="text-gray-600">
                  Sign up for our newsletter to receive updates on events, tips,
                  and exclusive deals.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-10">
          <button className="btn  bg-[#316881]  rounded-lg w-40  border-none text-white  mt-6 hover:bg-[#0d4763] ">Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
