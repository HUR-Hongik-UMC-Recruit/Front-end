import styled, { keyframes } from "styled-components";
import arrowRight from "../../assets/icons/arrow/ArrowNext.svg";
import arrowDown from "../../assets/icons/arrow/ArrowDown.svg";
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

const BTRTitleTyping = styled.h1`
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

const reveal = keyframes`
  0% {
    opacity:0;
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }`;

const BTRTitleReveal = styled.div`
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

  animation: ${reveal} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const flick = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.45), 0 0 3.75rem rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.45), 0 0 3.75rem rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.45), 0 0 3.75rem rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.45), 0 0 3.75rem rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.45), 0 0 3.75rem rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.35), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.35), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.4), 0 0 6.875rem rgba(255, 255, 255, 0.2), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.55), 0 0 3.75rem rgba(255, 255, 255, 0.4), 0 0 6.875rem rgba(255, 255, 255, 0.2), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.6), 0 0 3.75rem rgba(255, 255, 255, 0.45), 0 0 6.875rem rgba(255, 255, 255, 0.25), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.6), 0 0 3.75rem rgba(255, 255, 255, 0.45), 0 0 6.875rem rgba(255, 255, 255, 0.25), 0 0 6.25rem rgba(255, 255, 255, 0.1);
  }
}
`;

const BTRTitleFlick = styled.div`
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

  animation: ${flick} 4s linear both;
`;

const tracking = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;

const BTRTitleTracking = styled.div`
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

  animation: ${tracking}  0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
`;

const BTRDetail = styled.p`
  margin: 0;

  color: var(--Grey-200, #edf4f5);
  text-align: center;
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 2.025rem */
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
  border: 0.063rem solid #90e6c9;
  background: #fcffff;
  box-shadow: 0rem 0rem 2.081rem 0rem rgba(144, 224, 230, 0.2);
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
    animation: ${shake} 0.7s;
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
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
  };

  const text = "Break The Rules!"; // 타이핑할 문구
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
      <BTRWrapper>
        <BTRTitleTyping>{displayedText}</BTRTitleTyping>
        <BTRTitleReveal>Break The Rules!</BTRTitleReveal>
        <BTRTitleFlick>Break The Rules!</BTRTitleFlick>
        <BTRTitleTracking>Break The Rules!</BTRTitleTracking>
        <BTRDetail>
          도전과 성장, 열정이 모이는 곳<br />
          당신의 아이디어를 오직 UMC에서
        </BTRDetail>
      </BTRWrapper>
      <RecruitButton onClick={toRecruit}>
        UMC 8기 지원하기
        <img src={arrowRight} />
      </RecruitButton>
      <NextButton onClick={downClick}>
        <img src={arrowDown} />
      </NextButton>
    </BTRContainer>
  );
};

export default HomeMain;
