import React, { useState } from "react";
import styled from "styled-components";
import Requirements from "../../components/recruitment/PartRequirements";
import Qualifications from "../../components/recruitment/PartQualifications";
import SectionHeader from "../../components/common/SectionHeader";
import parts from "../../data/common/PartList";
import { motion } from "framer-motion";

const RecruitmentPart = () => {
  const [activePart, setActivePart] = useState("Plan");

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <SectionHeader title="모집 분야" subtitle="Recruitment Part" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 1 },
          }}
        >
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
        </motion.div>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default RecruitmentPart;

const BackgroundContainer = styled.div`
  width: 100%;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 54.813rem;
  margin-bottom: 2.5rem;
`;

const PartButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0.625rem;
  width: 6.313rem;
  height: 3.313rem;
  border: none;
  border-bottom: ${(props) => (props.$isActive ? "0.063rem solid #FCFFFF" : "none")};
  color: ${(props) => (props.$isActive ? "#FCFFFF" : "#5C6161")};
  background-color: transparent;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 140%;
  &:hover {
    color: #fcffff;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
