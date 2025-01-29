import bannerImg from "../../assets/images/contactsBanner.jpg";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FaEnvelope, FaHome, FaPhoneSquare } from "react-icons/fa";
import ContactForm from "../../components/contactForm/ContactForm";


// const position = [42.829995, -76.096287];

const Contacts = () => {
  return (
    <div>
     <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[450px] w-[90%] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            Contact Us
          </h2>
        </div>
      </div>
      <div>
        <div className="w-[90%] mx-auto my-12 shadow-xl shadow-gray-600">
          <iframe
            className="mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.414332759932!2d90.38193637141114!3d23.868206518896525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716409103887!5m2!1sen!2sbd"
            width="100%"
            height="300"
            // style="border:0;"
            allowFullScreen={true}
            // loading="lazy"
            // referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-8 my-8">
        <div className="flex-1 ">
          <div className="my-20 flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="space-y-12 ">

              <div className="flex items-center gap-4">
                <FaHome className="text-3xl text-[#316881]" />
                <div>
                  <p className="font-semibold text-xl">
                    Cycle Hub
                  </p>
                  <p>1234 Elm Street Springfield, IL 62704 USA</p>{" "}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneSquare className="text-3xl text-[#316881]" />
                <p>(555) 123-4567</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-3xl text-[#316881]" />
                cycleHub@cycleHub.com
              </div>

            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 p-8 rounded-lg">
    <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
