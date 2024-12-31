import React from "react";
import styled from "styled-components";

const PartRequirements = ({ part }) => {
  const PartRequirements = {
    Plan: "Figma",
    Design: "Figma",
    Android: "Kotlin",
    iOS: "Swift",
    Web: "HTML\tCSS\tJavaScript",
    Spring: "Java",
    "Node.js": "JavaScript",
  };

  return (
    <RequirementsContainer>
      <RequirementsHeading>요구 역량</RequirementsHeading>
      <RequirementsText>{PartRequirements[part]}</RequirementsText>
    </RequirementsContainer>
  );
};

export default PartRequirements;

const RequirementsContainer = styled.div`
  display: flex;
  padding: 1.938rem 0rem 1.938rem 2.5rem;
  gap: 0.625rem;
  width: 52.5rem;
  background: #1d201e;
  border: 1px solid #353838;
  border-radius: 10px;
`;

const RequirementsHeading = styled.h1`
  font-weight: 575;
  font-size: 22px;
  line-height: 135%;
  color: #fcffff;
  margin-right: 3rem;
`;

const RequirementsText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 145%;
  color: #a2abab;
  white-space: pre;
`;
