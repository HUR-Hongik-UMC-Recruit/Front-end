import styled from "styled-components";
import arrowNext from "../../assets/icons/ArrowNext.png";
import arrowDown from "../../assets/icons/ArrowDown.png";
import background from "../../assets/icons/BgHome.png";
import { useNavigate } from "react-router-dom";

const BTRContainer = styled.div`
  background: #111412;
  background-image: url(${background});
  background-size: cover;
  background-position: center top;

  display: flex;
  width: 100%;
  height: 66.75rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12.4375rem;
`;

const BTRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
  align-items: center;
  gap: 1.6875rem;
`;

const BTRText = styled.h1`
  display: flex;
  align-self: center;
  margin: 0;

  color: #90e6c9;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 5.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 6.5625rem */
  letter-spacing: -0.105rem;
`;

const BTRDetail = styled.p`
  margin: 0;

  color: var(--Grey-200, #edf4f5);
  text-align: center;
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const RecruitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.5rem;
  height: 4rem;

  border-radius: 5rem;
  border: 1px solid #90e6c9;
  background: #fcffff;
  box-shadow: 0px 0px 33.3px 0px rgba(144, 224, 230, 0.2);
  cursor: pointer;

  color: #353838;
  font-family: "Pretendard Variable";
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 135%; /* 1.85625rem */
  letter-spacing: -0.01375rem;
`;

const NextButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const HomeMain = () => {
  const navigate = useNavigate();

  const toRecruit = () => {
    // 새로고침 느낌
    // window.location.href = "/recruitment";

    // 스무스하게 넘어감
    navigate("/recruitment");
  };

  const downClick = () => {
    console.log("dwn");
  };

  return (
    <BTRContainer>
      <BTRWrapper>
        <BTRText>Break the Rules!</BTRText>
        <BTRDetail>
          도전과 성장, 열정이 모이는 곳<br />
          당신의 아이디어를 오직 UMC에서
        </BTRDetail>
      </BTRWrapper>
      <RecruitButton onClick={toRecruit}>
        UMC 8기 지원하기
        <img src={arrowNext} />
      </RecruitButton>
      <NextButton onClick={downClick}>
        <img src={arrowDown} />
      </NextButton>
    </BTRContainer>
  );
};

export default HomeMain;
