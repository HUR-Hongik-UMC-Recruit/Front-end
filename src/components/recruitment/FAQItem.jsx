import React, { useState } from "react";
import styled from "styled-components";
import DownIcon from "../../assets/icons/DownIcon.svg";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <QuestionWrapper>
      <QuestionContainer $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <QuestionContent>
          <ContentWrapper>
            <QuestionHeader>
              <QuestionText $isOpen={isOpen}>{question}</QuestionText>
              <IconWrapper $isOpen={isOpen}>
                <img src={DownIcon} alt="toggle" />
              </IconWrapper>
            </QuestionHeader>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0, opacity: 1 }} // 닫힐 때의 애니메이션 추가
                  transition={{ duration: 0.5 }}
                  style={{ overflow: "hidden" }}
                >
                  <AnswerWrapper>
                    <AnswerTitle>{answer}</AnswerTitle>
                    <AnswerDescription>{description}</AnswerDescription>
                  </AnswerWrapper>
                </motion.div>
              )}
            </AnimatePresence>
          </ContentWrapper>
        </QuestionContent>
      </QuestionContainer>
    </QuestionWrapper>
  );
};

export default FAQItem;

const QuestionWrapper = styled.div`
  width: 63rem;
`;

const QuestionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.5rem 2.5rem;
  width: 100%;
  height: auto;
  background: #1d201e;
  opacity: 0.8;
  border: ${({ $isOpen }) =>
    $isOpen ? "1.5px solid #5C6161" : "1px solid #353838"};
  border-radius: ${({ $isOpen }) => ($isOpen ? "0.938rem" : "0.625rem")};
  cursor: pointer;
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 15.5rem;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const QuestionText = styled.span`
  white-space: pre;
  width: 32.5rem;
  height: 1.875rem;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 135%;
  letter-spacing: -0.01em;
  color: ${({ $isOpen }) => ($isOpen ? "#818989" : "#E1E9EA")};
  transition: color 0.3s ease;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AnswerTitle = styled.p`
  width: 34.063rem;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 135%;
  letter-spacing: -0.01em;
  color: #90e6c9;
  margin: 0;
  white-space: pre;
`;

const AnswerDescription = styled.p`
  width: 55rem;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 135%;
  letter-spacing: -0.01em;
  color: #e1e9ea;
  margin: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  img {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
  }
`;
