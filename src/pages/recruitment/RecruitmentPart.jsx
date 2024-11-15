import React, { useState } from "react";
import styled from "styled-components";
import Requirements from "../../components/recruitment/PartRequirements";
import Qualifications from "../../components/recruitment/PartQualifications";
import SectionHeader from "../../components/common/SectionHeader";

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
        <SectionHeader title="모집 분야" subtitle="Recruitment Part" />

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
  padding: 0rem 13.438rem 15rem;
  max-width: 63rem;
  //height: 58.313rem;
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
