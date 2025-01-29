import store_front from "../../assets/images/store-front.jpg";
import people from "../../assets/images/about.jpg";
import kids from "../../assets/images/kids.jpg";
import bannerImg from "../../assets/images/about-banner.jpg"

const About = () => {
  return (
    <div>
      <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[450px] w-[90%] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            About Us
          </h2>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              About Cycle Hub
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Your one-stop destination for premium bicycles and exceptional
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={store_front}
                alt="Bicycle Hub Store Front"
                className="rounded-lg shadow-xl w-full shadow-blue-300"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-4">
                At Cycle Hub, we are passionate about cycling and committed to
                providing the best bicycles for every kind of rider. Whether
                you're a seasoned professional or just starting your cycling
                journey, we have the perfect bike for you.
              </p>
              <p className="text-gray-700">
                Established in 2010, Cycle Hub has grown into a trusted name
                in the cycling community. We offer a wide range of bicycles,
                accessories, and services, all designed to help you ride with
                confidence and joy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                Our mission is to inspire a love for cycling while promoting a
                healthy and eco-friendly lifestyle. We strive to make
                high-quality bicycles accessible to everyone, backed by expert
                advice and outstanding customer service.
              </p>
              <p className="text-gray-700">
                We believe in building a community of riders who share a passion
                for adventure, fitness, and sustainability. Join us in making
                the world a better place, one pedal at a time.
              </p>
            </div>
            <div>
              <img
                src={people}
                alt="Cyclists enjoying their ride"
                className="rounded-lg shadow-xl shadow-blue-300 w-full"
              />
            </div>
          </div>

          <div className="mt-16 ">
            <div className="shadow-lg rounded-lg">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  Why Choose Cycle Hub?
                </h2>
                <div className="flex justify-center items-center flex-1">
                  <div className="flex-1">
                    <img
                      className="rounded-lg w-[90%] shadow-xl shadow-blue-300"
                      src={kids}
                      alt=""
                    />
                  </div>

                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>
                      Wide range of high-quality bicycles for all skill levels.
                    </li>
                    <li>
                      Expert team of cycling enthusiasts ready to assist you.
                    </li>
                    <li>Comprehensive maintenance and repair services.</li>
                    <li>
                      Eco-friendly initiatives to promote sustainable
                      transportation.
                    </li>
                    <li>
                      Community events and workshops for cycling enthusiasts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
