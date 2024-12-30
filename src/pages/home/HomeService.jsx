import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const ServiceContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 35.7rem;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  gap: 4rem;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(15%);
  }
  `;

const ServiceLine = styled.div`
  opacity: 0;
  width: 0.125rem;
  height: 11.8125rem;
  background: linear-gradient(#111412, #90e6c9);
  animation: ${(props) =>
    props.animate
      ? css`
          ${fadeIn} 3s ease-in-out forwards
        `
      : ""};
`;

const TextWrapper = styled.div``;

const TextService = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  color: #fcffff;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 135%; /* 2.3625rem */
  letter-spacing: -0.0175rem;
`;

const TextDetail = styled.p`
  margin: 0;
  color: #bcc6c6;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const HomeService = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // 한 번만 애니메이션을 실행
        }
      });
    });

    const serviceLine = document.getElementById("serviceLine");
    if (serviceLine) {
      observer.observe(serviceLine);
    }

    return () => {
      if (serviceLine) {
        observer.unobserve(serviceLine);
      }
    };
  }, []);

  return (
    <ServiceContainer>
      <ServiceWrapper>
        <ServiceLine id="serviceLine" animate={animate} />
        <TextWrapper>
          <TextService>실제로 동작하는 서비스를 만들어보자!</TextService>
          <TextDetail>
            UMC는 목표를 이루기 위해 열정과 끈기로 가득찬 챌린저들과 함께 달리며
            성장합니다🔥
          </TextDetail>
        </TextWrapper>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default HomeService;
