import Challenge from "../../components/common/Challenge";
import HomeActivity from "./HomeActivity";
import HomeMain from "./HomeMain";
import HomePart from "./HomePart";
import HomeService from "./HomeService";
import HomeUMC from "./HomeUMC";
import HomeUniversity from "./HomeUniversity";

const HomePage = () => {
  return (
    <div style={{ background: "black" }}>
      <HomeMain />
      <HomeUMC />
      <HomeService />
      <HomePart />
      <HomeActivity />
      <HomeUniversity />
      <Challenge />
    </div>
  );
};

export default HomePage;
