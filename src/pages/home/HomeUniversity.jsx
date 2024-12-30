import styled, { keyframes } from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import Hongik from "../../assets/icons/university/hongik.png";
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
  height: 69.4rem;
  background: #111412;
`;

const UniversityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15rem;
  gap: 10rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  flex: 0 0 100%;

  // &:hover .group {
  //   animation-play-state: paused;
  // }
`;

const scrollingLeft = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
`;

const Top = styled.div`
  display: flex;
  gap: 4rem;
  padding-right: 4rem;
  height: 15rem;
  justify-content: center;
  align-items: center;

  will-change: transform;
  animation: ${scrollingLeft} 30s linear infinite;
`;

const scrollingRight = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`;

const Down = styled.div`
  display: flex;
  gap: 4rem;
  padding-right: 4rem;
  height: 15rem;
  justify-content: center;
  align-items: center;

  will-change: transform;
  animation: ${scrollingRight} 30s linear infinite;
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
  const top = [
    Hongik,
    Yonsei,
    Ihwa,
    Duksung,
    Soongsil,
    Sangmyung,
    Catholic,
    Namseoul,
    Sungshin,
    Dongguk,
    Jungang,
    Seoulwomen,
  ];

  const down = [
    Hongik,
    Yonsei,
    Ihwa,
    Duksung,
    Soongsil,
    Sangmyung,
    Catholic,
    Namseoul,
    Sungshin,
    Dongguk,
    Jungang,
    Seoulwomen,
  ];

  return (
    <UniversityContainer>
      <UniversityWrapper>
        <SectionHeader
          title="연합 대학"
          subtitle="UMC 8기는 24개의 학교와 함께해요"
        />
        <CarouselWrapper>
          <Carousel>
            <Top className="group">
              {top.map((content) => (
                <CardWrapper>
                  <Card src={content} />
                </CardWrapper>
              ))}
            </Top>
            <Top className="group">
              {top.map((content) => (
                <CardWrapper>
                  <Card src={content} />
                </CardWrapper>
              ))}
            </Top>
          </Carousel>
          <Carousel>
            <Down className="group">
              {down.map((content) => (
                <CardWrapper>
                  <Card src={content} />
                </CardWrapper>
              ))}
            </Down>
            <Down className="group">
              {down.map((content) => (
                <CardWrapper>
                  <Card src={content} />
                </CardWrapper>
              ))}
            </Down>
          </Carousel>
        </CarouselWrapper>
      </UniversityWrapper>
    </UniversityContainer>
  );
};

export default HomeUniversity;
