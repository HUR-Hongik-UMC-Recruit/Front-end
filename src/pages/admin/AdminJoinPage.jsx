import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10.88rem 12.5rem;
`;

const Title = styled.div`
  width: 50%;
  color: #1d201e;
  font-family: "Pretendard Variable";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 135%; /* 3.0375rem */
  letter-spacing: -0.0225rem;
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin: 0 2rem;
`;

const InfoWrapper = styled.div``;

const InfoDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 3rem;
`;

const InfoTitle = styled.div`
  color: #5c6161;
  font-family: "Pretendard Variable";
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 550;
  line-height: 145%;
`;

const InfoInput = styled.input`
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
  //   padding-bottom: 0.5rem;
  background: transparent;

  &::placeholder {
    color: #818989;
  }

  &:focus {
    outline: none;
    color: #5c6161;
    border-bottom-color: #90e6c9;
  }
`;

const JoinButton = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 0.625rem;
  border: 1px solid #818989;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #353838;
  font-family: "Pretendard Variable";
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 135%; /* 1.85625rem */
  letter-spacing: -0.01375rem;
`;

const AdminJoinPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const joinButtonClick = async () => {
    if (!username || !password || !name || !email) {
      alert("모든 필드를 채워 주세요.");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/join`, {
        username: username,
        password: password,
        name: name,
        email: email,
      });

      console.log("회원가입 성공:", response.data);
      alert("회원가입에 성공했습니다.");
      window.location.href = "/login";
    } catch (e) {
      console.log("회원가입 실패:", e);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>

        <ContentWrapper>
          <InfoWrapper>
            <InfoDetailWrapper>
              <InfoTitle>ID</InfoTitle>
              <InfoInput
                type="text"
                placeholder="ID를 입력해주세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InfoDetailWrapper>
            <InfoDetailWrapper>
              <InfoTitle>PW</InfoTitle>
              <InfoInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InfoDetailWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <InfoDetailWrapper>
              <InfoTitle>Email</InfoTitle>
              <InfoInput
                type="email"
                placeholder="이메일 주소를 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InfoDetailWrapper>
            <InfoDetailWrapper>
              <InfoTitle>이름</InfoTitle>
              <InfoInput
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InfoDetailWrapper>
          </InfoWrapper>

          <JoinButton onClick={joinButtonClick}>회원가입</JoinButton>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default AdminJoinPage;
