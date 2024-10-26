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
