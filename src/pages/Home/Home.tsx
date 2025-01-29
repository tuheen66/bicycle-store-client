import Banner from "../../components/banner/Banner";
import Community from "../../components/community/Community";
import FeaturedBicycles from "../../components/featuredBicycles/FeaturedBicycles";
import Services from "../../components/services/Services";
import SustainableCycling from "../../components/sustainableCycling/SustainableCycling";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedBicycles />
      <Services/>
      <Community/>
      <SustainableCycling/>
    </div>
  );
};

export default Home;
