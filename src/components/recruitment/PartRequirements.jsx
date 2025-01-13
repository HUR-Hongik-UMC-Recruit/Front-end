import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        duration: 0.9,
      }
    }
  };

  return (
    <RequirementsContainer
    as={motion.div}
    key={part}
    variants={variants}
    initial="initial"
    animate="animate"
  >
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
  border: 0.063rem solid #353838;
  border-radius: 0.625rem;
`;

const RequirementsHeading = styled.h1`
  font-weight: 575;
  font-size: 1.5rem;
  line-height: 135%;
  color: #fcffff;
  margin-right: 3rem;
`;

const RequirementsText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 145%;
  color: #a2abab;
  white-space: pre;
`;
