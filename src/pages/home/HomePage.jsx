import Challenge from "../../components/common/Challenge";
import HomeActivity from "./HomeActivity";
import HomeMain from "./HomeMain";
import HomePart2 from "./HomePart2";
import HomeService from "./HomeService";
import HomeUMC from "./HomeUMC";
import HomeUniversity from "./HomeUniversity";

const HomePage = () => {
  return (
    <div>
      <HomeMain />
      <HomeUMC />
      <HomeService />
      <HomePart2 />
      <HomeActivity />
      <HomeUniversity />
      <Challenge />
    </div>
  );
};

export default HomePage;
