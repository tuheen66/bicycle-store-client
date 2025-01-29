import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="">
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center w-[90%]  mx-auto bg-gray-300 shadow-xl pb-8 lg:pb-0  px-2 rounded-lg ">
        <div className="flex items-center">
          <img className="w-16 py-2" src={logo} alt="" />
          <h1 className="font-bold text-2xl">
            <span className="text-[#346a83]">CYCLE HUB</span>{" "}
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
            <NavLink
              to="/"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#316881" : "",
                  textDecorationColor: isActive ? "#316881" : "none",
                  color: isActive ? "White" : "#374177",
                  borderRadius: "5px",
                  padding: "2px 6px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/all-bicycles"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#316881" : "",
                  textDecorationColor: isActive ? "#316881" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              All Bicycles
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#316881" : "",
                  textDecorationColor: isActive ? "#316881" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#316881" : "",
                  textDecorationColor: isActive ? "#316881" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Contact Us
            </NavLink>

            {user && (
            <NavLink
              to={
                `/${user.role}/dashboard`
              }
            >
              Dashboard
            </NavLink>
          )}
          </div>
        </div>

        <div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 rounded-lg border-none bg-[#316881] hover:bg-[#30336b] text-white "
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="px-6 py-2 border-none rounded-lg mr-2 bg-[#316881] hover:bg-[#0d4763] text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 border-none rounded-lg mr-2 bg-[#316881] hover:bg-[#0d4763] text-white">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
