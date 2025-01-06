import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import contents from "../../data/home/UMCData";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const HUMCContainer = styled.div`
  background: #111412;
  display: flex;
  width: 100%;
  height: 73.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.75rem;
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

const SectionWrapper = styled(motion.div)`
  display: flex;
  width: 18.75rem;
  height: 26.1875rem;
  flex-direction: column;
  background: #1d201e;
  border-radius: 0.625rem;
  border: 1px solid #353838;
`;

const SectionDetail = styled.div`
  display: flex;
  height: 17.1875rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.25rem 2.25rem 0rem 2.25rem;
`;

const SectionTitle = styled.p`
  margin: 0;
  padding-bottom: 1.19rem;

  color: #d1dadb;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.3625rem */
  letter-spacing: -0.0175rem;
`;

const SectionText = styled.p`
  margin: 0;

  color: #818989;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
  align-self: stretch;
`;

const SectionNum = styled.p`
  margin: 0;
  padding: 2.69rem 2.25rem 1.69rem 2.25rem;

  color: #353838;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.3625rem */
  letter-spacing: -0.0175rem;
  align-self: stretch;
`;

const HomeUMC = React.forwardRef((props, scrollRef) => {
  const contents = [
    {
      id: "01",
      title: "도전",
      detail: "배움에 있어 두려움과\n망설임이 없는 사람",
    },
    {
      id: "02",
      title: "협업",
      detail: "실패를 두려워하지 않고\n도전을 즐기는 사람",
    },
    {
      id: "03",
      title: "성장",
      detail: "불가능할 이유보다\n가능할 이유를\n먼저 찾는 사람",
    },
    {
      id: "04",
      title: "혁신",
      detail: "UMC의 모든 활동에\n적극적으로 참여할\n의사가 있는 사람",
    },
  ];

  // 해당 파트가 사용자의 화면에 들어왔을 때 애니메이션 시작할 수 있게 하는 코드
  const [visibleSections, setVisibleSections] = useState(
    Array(contents.length).fill(false)
  );
  const animationRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 들어왔을 때
          setVisibleSections((prev) => {
            const newVisibleSections = [...prev];
            if (!newVisibleSections[index]) {
              newVisibleSections[index] = true; // 애니메이션 실행
            }
            return newVisibleSections;
          });
        }
      });
    });

    animationRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <HUMCContainer ref={scrollRef}>
      <SectionHeader
        title="홍익대학교 UMC를 소개합니다"
        subtitle="IT 연합 개발 동아리 University Makeus Challenge"
      />
      <SectionContainer>
        {contents.map((content, index) => (
          <SectionWrapper
            key={content.id}
            data-index={index}
            ref={(el) => (animationRef.current[index] = el)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: visibleSections[index] ? 1 : 0,
              y: visibleSections[index] ? 0 : 20,
            }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.3 }}
          >
            <SectionDetail>
              <SectionTitle>{content.title}</SectionTitle>
              {content.detail.split("\n").map((line) => (
                <SectionText>{line}</SectionText>
              ))}
            </SectionDetail>
            <SectionNum>{content.id}</SectionNum>
          </SectionWrapper>
        ))}
      </SectionContainer>
    </HUMCContainer>
  );
});

export default HomeUMC;
