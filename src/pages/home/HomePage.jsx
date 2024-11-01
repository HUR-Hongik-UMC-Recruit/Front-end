import HomeAskChallenge from "./HomeAskChallenge";
import HomeMain from "./HomeMain";
import HomeService from "./HomeService";
import HomeUMC from "./HomeUMC";

const HomePage = () => {
  return (
    <div>
      <HomeMain />
      <HomeUMC />
      <HomeService />
      <HomeAskChallenge />
    </div>
  );
};

export default HomePage;
