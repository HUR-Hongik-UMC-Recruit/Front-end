import React, { useState } from "react";
import styled from "styled-components";

import {
  Section,
  ContentWrapper,
  SectionTitle,
  Divider,
  Label,
  RequiredDot,
  Input,
  Button,
  DisabledButton,
  InputGroup,
} from "../../../components/apply/common/SectionStyles";

const Verification = () => {
  const [emailSent, setEmailSent] = useState(false); // 이메일 인증 요청 상태
  const [verificationCode, setVerificationCode] = useState(""); // 인증 코드 입력값
  const [verificationSent, setVerificationSent] = useState(false); // 확인 버튼 클릭 상태

  const handleEmailVerification = () => {
    setEmailSent(true);
    // 실제 이메일 인증 요청 로직 추가
  };

  const handleCodeVerification = () => {
    setVerificationSent(true);
    // 실제 확인 코드 검증 로직 추가
  };

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>본인 인증</SectionTitle>
        <Divider />

        <StyledFormGroup>
          <Label>
            이메일 <RequiredDot />
          </Label>

          <InputGroup>
            <Input
              type="email"
              placeholder="본인 이메일 주소를 입력해주세요."
            />
            {emailSent ? (
              <DisabledButton>인증 요청</DisabledButton>
            ) : (
              <Button onClick={handleEmailVerification}>인증 요청</Button>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              placeholder="확인 코드를 입력해주세요."
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />

            {!verificationCode ? (
              <DisabledButton>확인</DisabledButton>
            ) : verificationSent ? (
              <DisabledButton>확인</DisabledButton>
            ) : (
              <Button onClick={handleCodeVerification}>확인</Button>
            )}
          </InputGroup>
        </StyledFormGroup>
      </ContentWrapper>
    </Section>
  );
};

export default Verification;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 44.313rem;
  gap: 0.938rem;
`;
