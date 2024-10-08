import Footer from "../components/Footer/Footer";
import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import SaghfinooMap from "../components/Houses/SaghfinooMap";
import Navbar from "../ui/Navbar";

const RentHouse: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <HousesHeader headerText="Rent a house" />
        <div className="flex gap-12">
          <FetchHouses city="rent" />
          <SaghfinooMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RentHouse;
