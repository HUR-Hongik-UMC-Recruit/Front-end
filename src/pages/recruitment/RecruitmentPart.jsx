import React, { useState } from "react";
import styled from "styled-components";
import Requirements from "../../components/recruitment/PartRequirements";
import Qualifications from "../../components/recruitment/PartQualifications";

const RecruitmentPart = () => {
  const [activePart, setActivePart] = useState("Plan");

  const parts = [
    "Plan",
    "Design",
    "Android",
    "iOS",
    "Web",
    "Spring",
    "Node.js",
  ];

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <Section>
          <SectionTitle>모집 분야</SectionTitle>
          <RecruitmentText>Recruitment Part</RecruitmentText>
        </Section>

        <ButtonContainer>
          {parts.map((part) => (
            <PartButton
              key={part}
              onClick={() => setActivePart(part)}
              $isActive={activePart === part}
            >
              {part} {/* 버튼 텍스트 */}
            </PartButton>
          ))}
        </ButtonContainer>

        <DetailsContainer>
          <Qualifications part={activePart} />
          <Requirements part={activePart} />
        </DetailsContainer>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default RecruitmentPart;

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 58.313rem;
  background-color: #111412;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 95.313rem;
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
  color: #90e6c9;
  margin-bottom: 4.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 877px;
  margin-bottom: 40px;
`;

const PartButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 101px;
  height: 53px;
  border: none;
  border-bottom: ${(props) => (props.$isActive ? "1px solid #FCFFFF" : "none")};
  color: ${(props) => (props.$isActive ? "#FCFFFF" : "#5C6161")};
  background-color: transparent;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  &:hover {
    color: #fcffff;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
