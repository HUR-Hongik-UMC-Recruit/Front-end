import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import FAQItem from "../../components/recruitment/FAQItem";
import faqData from "../../data/recruitment/FAQData";

const FAQ = () => {
  return (
    <BackgroundContainer>
      <ContentWrapper>
        <SectionHeader title="자주 묻는 질문" subtitle="FAQ" />
        <FAQListContainer>
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} /> // 항목마다 FAQItem 컴포넌트 생성 (spread 연산자로 객체 모든 속성 props로 전달하기)
          ))}
        </FAQListContainer>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default FAQ;

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 48.438rem;
  background-color: #111412;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 13.438rem 15rem;
  width: 90rem;
  height: auto;
`;

const FAQListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;
