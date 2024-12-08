import React, { useState } from "react";

import {
  Section,
  ContentWrapper,
  SectionTitle,
  Divider,
  FormGroup,
  Label,
  Button,
  ButtonWrapper,
  TextArea,
  Input,
  InfoText,
  StyledRadioGroup,
  RadioButton,
  RadioDot,
  RadioCircle,
} from "../../../components/apply/common/SectionStyles";

const CommonQuestions = () => {
  // 라디오 버튼 상태 관리
  const [selectedOption, setSelectedOption] = useState("");

  // 라디오 버튼 클릭 핸들러
  const handleRadioClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>공통 질문</SectionTitle>
        <Divider />

        <FormGroup>
          <Label>
            1. UMC 지원 동기와 UMC 활동을 통해 기대하는 바를 서술해주세요.
          </Label>
          <TextArea placeholder="500자 이내로 작성해주세요." />
        </FormGroup>

        <FormGroup>
          <Label>2. 본인의 장단점에 대해 서술해주세요.</Label>
          <TextArea placeholder="500자 이내로 작성해주세요." />
        </FormGroup>

        <FormGroup>
          <Label>
            3. GitHub를 이용해 프로젝트를 한 경험이 있다면 GitHub 주소를
            남겨주세요.
          </Label>
          <Input type="text" placeholder="예) http://github.com/example" />
        </FormGroup>

        <FormGroup>
          <Label>4. 스터디 리더를 희망하시나요?</Label>
          <StyledRadioGroup>
            <RadioButton
              $active={selectedOption === "예"}
              onClick={() => handleRadioClick("예")}
            >
              <RadioCircle $active={selectedOption === "예"}>
                {selectedOption === "예" && <RadioDot />}
              </RadioCircle>
              예
            </RadioButton>

            <RadioButton
              $active={selectedOption === "아니요"}
              onClick={() => handleRadioClick("아니요")}
            >
              <RadioCircle $active={selectedOption === "아니요"}>
                {selectedOption === "아니요" && <RadioDot />}
              </RadioCircle>
              아니요
            </RadioButton>

            <RadioButton
              $active={selectedOption === "고민해보겠습니다"}
              onClick={() => handleRadioClick("고민해보겠습니다")}
            >
              <RadioCircle $active={selectedOption === "고민해보겠습니다"}>
                {selectedOption === "고민해보겠습니다" && <RadioDot />}
              </RadioCircle>
              고민해보겠습니다
            </RadioButton>
          </StyledRadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>5. UMC에 임하는 각오를 서술해주세요.</Label>
          <InfoText>
            스터디 리더란 매주 진행되는 스터디의 리더를 의미합니다. 선수 지식이
            있지 않아도 열심히 공부할 열정과 책임감이 있다면 스터디 리더 지원이
            가능합니다.{"\n"}
            이후에 스터디 리더 지원을 따로 받을 예정이며, 스터디 리더 확정이
            아니니 부담가지지 않으셔도 됩니다.
          </InfoText>
          <TextArea placeholder="500자 이내로 작성해주세요." />
        </FormGroup>

        <ButtonWrapper>
          <Button>다음</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default CommonQuestions;
