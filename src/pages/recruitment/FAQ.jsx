import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import FAQItem from "../../components/recruitment/FAQItem";

const FAQ = () => {
  const faqData = [
    {
      question: "Q.\t개발 경험이 없는데 지원해도 되나요?",
      answer: "A.\t네, 가능합니다.",
      description: "개발 경험이 없더라도 기초 지식이 있다면 지원 가능하며, 실력은 제공되는 워크북을 수행하시면서 쌓으실 수 있습니다. 성실하고 열심히 참여할 수 있다면 충분히 지원 가능합니다."
    },
    {
      question: "Q.\t전공 학과가 아니어도 지원 가능한가요?",
      answer: "A.\t네, 가능합니다.",
      description: "전공 학과가 아니어도 기초 지식이 있다면 지원 가능하며, 실력은 제공되는 워크북을 수행하시면서 쌓으실 수 있습니다. 성실하고 열심히 참여할 수 있다면 충분히 지원 가능합니다."
    },
    {
      question: "Q.\t동아리 회비는 얼마인가요?",
      answer: "A.\t5만원입니다.",
      description: "연합 3만원, 교내 2만원으로 총 5만원이며 회비는 해커톤, 컨퍼런스, 학교 행사 등에 쓰일 예정입니다."
    },
    {
      question: "Q.\t프로젝트 참가비가 무엇인가요?",
      answer: "A.\t스터디 종료 후 진행되는 Web or App 서비스 개발 프로젝트 참여 비용입니다.",
      description: "연합 프로젝트 진행 도중 탈부 예방이 주 목적으로 수료 시 2만원 페이백됩니다.\n프로젝트 참가비는 11월 초중으로 받을 예정입니다"
    }
  ];

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