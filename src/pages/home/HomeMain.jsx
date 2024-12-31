import styled, { keyframes } from "styled-components";
import arrowNext from "../../assets/icons/ArrowNext.png";
import arrowDown from "../../assets/icons/ArrowDown.png";
import background from "../../assets/icons/BgHome.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  margin-top: 5rem;
`;

const BTRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
  align-items: center;
  gap: 1.6875rem;
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BTRTitle = styled.h1`
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

  // &::after {
  //   content: "";
  //   display: inline-block;
  //   width: 0.5rem;
  //   height: 100%;
  //   background-color: #ffffff60;
  //   animation: ${blink} 1s infinite;
  // }
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

const shake = keyframes`
  0% {
        transform: rotate(0deg)
    }
    25% {
        transform: rotate(-8deg);
    }
    50% {
        transform: rotate(8deg);
    }
    75% {
        transform: rotate(-8deg);
    }
    100% {
        transform: rotate(0deg);
    }
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

  &: hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    animation: ${shake} 1s;
  }
`;

const NextButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const HomeMain = ({ downClick }) => {
  const navigate = useNavigate();

  const toRecruit = () => {
    // 새로고침 느낌
    // window.location.href = "/recruitment";

    // 스무스하게 넘어감
    navigate("/recruitment");
  };

  const text = "Break the Rules!"; // 타이핑할 문구
  const [displayedText, setDisplayedText] = useState(""); // 상태로 표시할 텍스트 관리
  const speed = 200; // 글자 타이핑 속도 (밀리초 단위)

  useEffect(() => {
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter(); // 타이핑 함수 호출

    return () => {
      // 컴포넌트 언마운트 시 클린업
      index = text.length; // 타이핑 중지
    };
  }, [text]); // text가 변경될 때마다 effect 실행

  return (
    <BTRContainer>
      <BTRWrapper className="typingContainer">
        <BTRTitle id="typingText">{displayedText}</BTRTitle>
        <BTRDetail id="typingText">
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
