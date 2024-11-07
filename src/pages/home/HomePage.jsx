import HomeActivity from "./HomeActivity";
import HomeAskChallenge from "./HomeAskChallenge";
import HomeMain from "./HomeMain";
import HomePart from "./HomePart";
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
      <HomeAskChallenge />
    </div>
  );
};

export default HomePage;
