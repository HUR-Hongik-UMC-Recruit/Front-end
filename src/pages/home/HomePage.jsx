import HomeActivity from "./HomeActivity";
import HomeAskChallenge from "./HomeAskChallenge";
import HomeMain from "./HomeMain";
import HomePart from "./HomePart";
import HomeService from "./HomeService";
import HomeUMC from "./HomeUMC";
import HomeUniversity from "./HomeUniversity";

const HomePage = () => {
  return (
    <div>
      <HomeMain />
      <HomeUMC />
      <HomeService />
      <HomePart />
      <HomeActivity />
      <HomeUniversity />
      <HomeAskChallenge />
    </div>
  );
};

export default HomePage;
