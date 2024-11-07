import styled, { keyframes } from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import Hongik from "../../assets/icons/university/홍익대학교.png";
import Yonsei from "../../assets/icons/university/연세대학교.png";
import Ihwa from "../../assets/icons/university/이화여자대학교.png";
import Duksung from "../../assets/icons/university/덕성여자대학교.png";
import Soongsil from "../../assets/icons/university/숭실대학교.png";
import Sangmyung from "../../assets/icons/university/상명대학교.png";
import Sungshin from "../../assets/icons/university/성신여자대학교.png";
import Dongguk from "../../assets/icons/university/동국대학교.png";
import Jungang from "../../assets/icons/university/중앙대학교.png";
import Catholic from "../../assets/icons/university/가톨릭대학교.png";
import Seoulwomen from "../../assets/icons/university/서울여자대학교.png";
import Namseoul from "../../assets/icons/university/남서울대학교.png";

const UniversityContainer = styled.div`
  width: 100%;
  height: 59.4rem;
  background: #111412;
`;

const UniversityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15rem;
  gap: 10rem;
`;

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  flex: 0 0 100%;

  &:hover .group {
    animation-play-state: paused;
  }
`;

const scrolling = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
`;

const Group = styled.div`
  display: flex;
  gap: 4rem;
  padding-right: 4rem;

  will-change: transform;
  animation: ${scrolling} 30s linear infinite;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 10.625rem;
  height: 10.625rem;

  justify-content: center;
  align-items: center;

  border-radius: 9.375rem;
  background: #fff;
  box-shadow: 0px 0px 20px 0px #009bcb;
`;

const Card = styled.img`
  width: 9.75rem;
  height: 9.75rem;
  flex-shrink: 0;
`;

const HomeUniversity = () => {
  const contents = [
    { top: Hongik, down: Sungshin },
    { top: Yonsei, down: Dongguk },
    { top: Ihwa, down: Jungang },
    { top: Duksung, down: Seoulwomen },
    { top: Soongsil, down: Namseoul },
    { top: Sangmyung, down: Sangmyung },
    { top: Hongik, down: Sungshin },
    { top: Yonsei, down: Dongguk },
    { top: Ihwa, down: Jungang },
    { top: Duksung, down: Catholic },
    { top: Catholic, down: Seoulwomen },
    { top: Namseoul, down: Soongsil },
  ];

  return (
    <UniversityContainer>
      <UniversityWrapper>
        <SectionHeader
          title="연합 대학"
          subtitle="UMC 8기는 24개의 학교와 함께해요"
        />
        <Carousel>
          <Group className="group">
            {contents.map((content) => (
              <CardsWrapper>
                <CardWrapper>
                  <Card src={content.top} />
                </CardWrapper>
                <CardWrapper>
                  <Card src={content.down} />
                </CardWrapper>
              </CardsWrapper>
            ))}
          </Group>
          <Group className="group">
            {contents.map((content) => (
              <CardsWrapper>
                <CardWrapper>
                  <Card src={content.top} />
                </CardWrapper>
                <CardWrapper>
                  <Card src={content.down} />
                </CardWrapper>
              </CardsWrapper>
            ))}
          </Group>
        </Carousel>
      </UniversityWrapper>
    </UniversityContainer>
  );
};

export default HomeUniversity;
