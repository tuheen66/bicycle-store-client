import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex  md:justify-between">
          <div className="mb-6 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-36 me-3" alt="FlowBite Logo" />
              <p className="text-lg">

              <span className="self-center text-4xl font-bold whitespace-nowrap ">
                Cycle Hub
              </span>
              <br />
              Providing quality cycles for decades
              </p>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-700 sm:text-center ">
            © 2025
            <a href="https://flowbite.com/" className="hover:underline">
              Cycle Hub
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-12 mt-4 sm:justify-center sm:mt-0">
            <FaFacebook/>
            <FaTwitter/>
            <FaGithub/>
            <FaDribbble/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
