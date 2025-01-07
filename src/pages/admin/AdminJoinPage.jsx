import React, { useState } from "react";
import styled from "styled-components";

const AdminJoinPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContentWrapper>
      <Title>UMC ADMIN</Title>

      <Form>
        <IdForm>
          <Label>ID</Label>
          <InputWrapper>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주엠씨"
            />
          </InputWrapper>
        </IdForm>

        <PasswordForm>
          <Label>PW</Label>
          <InputWrapper>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="패스워드를 입력해주엠씨"
            />
          </InputWrapper>
        </PasswordForm>

        <LoginBtn>
          <LoginText>로그인하기</LoginText>
        </LoginBtn>

        <SectionBtn>
          <LinkText>아이디 찾기</LinkText>
          <Divider />
          <LinkText>비밀번호 찾기</LinkText>
          <Divider />
          <LinkText>회원가입</LinkText>
        </SectionBtn>
      </Form>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  color: var(--Grey-900, #1d201e);
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%;
  letter-spacing: -0.0225rem;
  margin-bottom: 4.5rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.6875rem;
`;

const Label = styled.label`
  color: var(--Grey-800, #5c6161);
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  margin-bottom: 0.75rem;
`;

const IdForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem 3rem 2rem;
`;

const PasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem 3rem 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 25.6875rem;
  height: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: #818989;
  border: none;
  border-bottom: 0.10625rem solid #a2abab;
  padding-bottom: 0.5rem;
  background: transparent;

  &::placeholder {
    color: #818989;
  }

  &:focus {
    outline: none;
    border-bottom-color: #5c6161;
  }
`;

const LoginBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 26.5rem;
  height: 4rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid var(--Grey-700, #818989);
  background: transparent;
  cursor: pointer;
  margin: 0 auto 2rem auto;
`;

const SectionBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 26.5rem;
  margin: 0 auto;
`;

const LoginText = styled.span`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 135%;
  letter-spacing: -0.01em;
  color: #353838;
`;

const LinkText = styled.a`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 138%;
  letter-spacing: 0.01em;
  color: var(--Grey-700, #818989);
  font-feature-settings: "ss10" on;
  text-decoration: none;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1rem;
  height: 0;
  border: 0.0625rem solid #a2abab;
  transform: rotate(90deg);
`;

export default AdminJoinPage;