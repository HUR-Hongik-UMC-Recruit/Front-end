import React from "react";
import styled from "styled-components";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <RecruitmentText>{subtitle}</RecruitmentText>
    </Section>
  );
};

export default SectionHeader;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 3rem;
  font-weight: 650;
  line-height: 3.25rem;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.25rem;
`;

const RecruitmentText = styled.p`
  font-size: 0.938rem;
  font-weight: 400;
  font-size: 1.275rem;
  line-height: 135%;
  text-align: center;
  color: #90e6c9;
  margin-bottom: 4.25rem;
`;
