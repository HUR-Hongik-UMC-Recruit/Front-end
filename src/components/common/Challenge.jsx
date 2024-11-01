import styled from "styled-components";

const ChallengeContainer = styled.div`
  width: 100%;
  height: 28.87rem;

  background: #111412;
`;

const ChallengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 17.87rem;
  gap: 2.5rem;
`;

const ChallengeText = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 128%; /* 4.48rem */
  letter-spacing: -0.035rem;
`;

const TextDo = styled.span`
  color: #90e6c9;
`;

const TextSung = styled.span`
  color: #90e0e6;
`;

const ChallengeButton = styled.button`
  display: flex;
  height: 4rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;
  border: #b1f4dd;
  background: #b1f4dd;

  color: #353838;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 135%; /* 1.85625rem */
  letter-spacing: -0.01375rem;
`;

const Challenge = () => {
  return (
    <ChallengeContainer>
      <ChallengeWrapper>
        <ChallengeText>
          지금, UMC와 함께 <TextDo>도전</TextDo>하고 <TextSung>성장</TextSung>
          하세요!
        </ChallengeText>
        <ChallengeButton>모집 알림 신청하러 가기</ChallengeButton>
      </ChallengeWrapper>
    </ChallengeContainer>
  );
};

export default Challenge;
