import { useState } from "react";
import styled from "styled-components";

const PartContainer = styled.div`
  width: 100%;
`;

const PartWrapper = styled.div`
  margin: 0rem 12.3rem;
`;

const PartTitle = styled.div`
  color: #2b9176;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 575;
  line-height: 1.875rem; /* 125% */
`;

const PartBorder = styled.div`
  height: 0.1875rem;
  background: #e1e9ea;
  margin: 1rem 0rem 1.5rem 0rem;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
`;

const Question = styled.label`
  color: #1d201e;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
`;

const RadioPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.62rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.75rem;
  height: 3.75rem;
  gap: 1.9rem;
`;

const RadioWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 0.75rem;
  border: 1.5px solid #d1dadb;
  background: #fcffff;

  position: relative;
  cursor: pointer;

  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */

  &:hover {
    border: 1.5px solid #2b9176;
    background: #b1e9d6;
  }
`;

const Radio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  margin: -1px;
  clip-path: inset(50%);

  /* 체크된 상태일 때 스타일 변경 */
  &: checked + ${RadioWrapper} {
    font-weight: 550;
    background: #dffaf1;
    border-color: #2b9176;
    color: #353838;
  }
`;

const AnswerBig = styled.textarea`
  font-family: "Pretendard Variable";
  height: 15.063rem;
  padding: 0.938rem 1.125rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  resize: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */
  color: #353838;

  &::placeholder {
    color: #818989;
  }
`;

const Guide = styled.div`
  color: #2b9176;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`;

const AnswerSmall = styled.textarea`
  height: 1.88rem;
  padding: 0.9375rem 1.4375rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  resize: none;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */
  color: #353838;

  &::placeholder {
    color: #818989;
  }
`;

const ApplicationPart = () => {
  const [selectPart, setSelectPart] = useState("Plan");

  const parts = [
    "Plan",
    "Design",
    "Android",
    "iOS",
    "Web",
    "Spring",
    "Node.js",
  ];

  const partContent = {
    Plan: {
      question: "희망 기획 플랫폼을 선택해주세요.",
      guide:
        "런칭 프로젝트 팀 매칭 사정에 의해 변경될 수 있음을 미리 고지드립니다.",
      example: "예) Android, iOS, Web",
    },
    Design: {
      question:
        "디자인 경험 유무와 다룰 수 있는 툴을 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
    Android: {
      question:
        "코딩 경험 유무와 개발 경험이 있는 언어를 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
    iOS: {
      question:
        "코딩 경험 유무와 개발 경험이 있는 언어를 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
    Web: {
      question:
        "코딩 경험 유무와 개발 경험이 있는 언어를 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
    Spring: {
      question:
        "코딩 경험 유무와 개발 경험이 있는 언어를 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
    "Node.js": {
      question:
        "코딩 경험 유무와 개발 경험이 있는 언어를 쉼표로 구분하여 나열해 주세요.",
      guide: "없는 경우 ‘없음'으로 적어주세요.",
      example: "예) JavaScript, Java",
    },
  };

  const handleRadioChange = (e) => {
    setSelectPart(e.target.value);
  };

  return (
    <PartContainer>
      <PartWrapper>
        <PartTitle>파트별 질문</PartTitle>

        <PartBorder />

        <QuestionWrapper>
          <Question>1. 지원하고 싶은 트랙을 선택해주세요.</Question>
          <RadioPartWrapper>
            {parts.map((part, idx) => (
              <RadioLabel key={idx}>
                <Radio
                  type="radio"
                  name="part"
                  value={part}
                  onChange={handleRadioChange}
                />
                <RadioWrapper checked={idx === selectPart} key={part}>
                  {part}
                </RadioWrapper>
              </RadioLabel>
            ))}
          </RadioPartWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>
            2. {selectPart} 트랙에 지원하는 이유는 무엇인가요?
          </Question>
          <AnswerBig placeholder="500자 이하로 얘기해주세요"></AnswerBig>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>3. {partContent[selectPart].question}</Question>
          <Guide>{partContent[selectPart].guide}</Guide>
          <AnswerSmall
            placeholder={partContent[selectPart].example}
          ></AnswerSmall>
        </QuestionWrapper>
      </PartWrapper>
    </PartContainer>
  );
};

export default ApplicationPart;