import React from "react";
import styled from "styled-components";

const RecruitmentTarget = () => {
  const targetDetails = [
    "홍익대학교\n재학생 및 휴학생\n(졸업생 제외)",
    "학기 중 12회 진행되는\n스터디에 적극적으로\n참여할 수 있는 사람",
    "방학동안 나만의\n앱과 웹을 만들기 위해\n최선을 다할 사람",
    "각종 공식 행사\n(해커톤, 아이디어톤 등)에\n성실하게 참여할 사람",
    "활동 기간동안 개인적으로\n하루에 6시간 이상\n투자할 수 있는 사람",
    "UMC와 함께 도전하고\n성장하고 싶은 사람"
  ];

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <Section>
          <SectionTitle>모집 분야</SectionTitle>
          <RecruitmentText>Recruitment Target</RecruitmentText>
        </Section>
        <CardContainer>
          {targetDetails.map((detail, index) => (
            <Card key={index}>
              <CardText>
                {detail.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line === "(졸업생 제외)" ? (
                      <GraduationException>{line}</GraduationException>
                    ) : (
                      line
                    )}
                    <br />
                  </React.Fragment>
                ))}
              </CardText>
            </Card>
          ))}
        </CardContainer>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default RecruitmentTarget;

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 58.313rem;
  background-color: #111412;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 37rem;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8.5rem 13.438rem 15rem;
  max-width: 63rem;
  height: 58.313rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.25rem;
`;

const RecruitmentText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #90E6C9;
  margin-bottom: 4.25rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 1.5rem;
  gap: 0.625rem;
  width: 20rem;
  height: 11.813rem;
  background: #1D201E;
  border: 1px solid #353838;
  border-radius: 10px;
`;

const CardText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #E1E9EA;
  width: 100%;
  white-space: pre-wrap; /* 텍스트 내 줄바꿈(\n) 적용 */
`;

const GraduationException = styled.span`
  color: rgba(129, 137, 137, 1);
`;