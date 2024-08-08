import { Link } from "react-router-dom";
import EnterUser from "../components/Navbar/EnterUser";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center navbar-z max-w-[1200px] mx-auto">
      <div className="absolute bg-white shadow-lg border py-3 px-6 md:rounded-xl w-full md:w-11/12 max-w-[1700px] mx-32 md:my-14 z-50 flex justify-between items-center">
        <div className="flex gap-5 justify-between md:justify-center items-center">
          <HamburgerMenu />
          <Link to="/" className="hidden md:block">
            <img className="w-44" src="/photos/Logo.png" alt="logo" />
          </Link>
          <div className="hidden md:flex gap-3 font-semibold">
            <Link to={"/rent-house"}>Rent</Link>
            <Link to={"/buy-house"}>Buy</Link>
          </div>
        </div>
        <div className="md:hidden">
          <img className="w-36" src="/photos/Logo.png" alt="logo" />
        </div>
        <div className="flex md:gap-4 font-medium items-center">
          <EnterUser classHid="hidden">
            <p>Login</p>
          </EnterUser>
          <Link
            className="px-2 py-2 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white duration-300 text-sm md:text-md"
            to="/ad-region"
          >
            Advertising
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
