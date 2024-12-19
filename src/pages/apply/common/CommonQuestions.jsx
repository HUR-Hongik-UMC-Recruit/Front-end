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
  Grid,
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
          <Label>3. UMC에 임하는 각오를 서술해주세요.</Label>
          <TextArea placeholder="500자 이내로 작성해주세요." />
        </FormGroup>

        <FormGroup>
          <Label>4. UMC는 학기 중에 배운 것을 바탕으로 방학 동안 팀을 구성해 앱 런칭을 진행합니다. 실제로 어떤 서비스를 개발하고 싶은지 서술해주세요. </Label>
          <TextArea placeholder="500자 이내로 작성해주세요." />
        </FormGroup>

        <FormGroup>
          <Label>
            6. GitHub를 이용해 프로젝트를 한 경험이 있다면 GitHub 주소를
            남겨주세요.
          </Label>
          <Input type="text" placeholder="예) http://github.com/example" />
        </FormGroup>

        <FormGroup>
          <Label>7. 스터디 리더를 희망하시나요?</Label>

          <InfoText>
            스터디 리더란 매주 진행되는 스터디의 리더를 의미합니다. 선수 지식이
            있지 않아도 열심히 공부할 열정과 책임감이 있다면 스터디 리더 지원이
            가능합니다.{"\n"}
            이후에 스터디 리더 지원을 따로 받을 예정이며, 스터디 리더 확정이
            아니니 부담가지지 않으셔도 됩니다.
          </InfoText>

          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <StyledRadioGroup>
              <RadioButton
                $active={selectedOption === "예"}
                onClick={() => handleRadioClick("예")}
              >
                예
              </RadioButton>

              <RadioButton
                $active={selectedOption === "아니요"}
                onClick={() => handleRadioClick("아니요")}
              >
                아니요
              </RadioButton>
            </StyledRadioGroup>
          </Grid>
        </FormGroup>


        <ButtonWrapper>
          <Button>다음</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default CommonQuestions;
