import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {PartQualificationsData} from "../../data/recruitment/PartQualificationsData";

const PartQualifications = ({ part }) => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.1,
      },
    },
  };

  return (
    <QualificationsContainer>
      <QualificationsContent>
        <QualificationHeading>지원 자격</QualificationHeading>
        {PartQualificationsData[part].split("\n").map((line, index) => (
          <motion.div
            key={`${part}-${index}`}
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            <QualificationText $note={line.startsWith("※")}>
              {line}
            </QualificationText>
          </motion.div>
        ))}
      </QualificationsContent>
      <QualificationImage />
    </QualificationsContainer>
  );
};

export default PartQualifications;

const QualificationsContainer = styled.div`
  display: flex;
  padding: 2rem 0rem 2rem 2.5rem;
  width: 52.5rem;
  background: #1d201e;
  border: 0.063rem solid #353838;
  border-radius: 0.625rem;
`;

const QualificationsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const QualificationHeading = styled.h1`
  font-weight: 575;
  font-size: 1.5rem;
  line-height: 135%;
  color: #fbfbfb;
  margin-bottom: 2.5rem;
  margin-top: 0rem;
`;

const QualificationText = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 170%;
  margin-top: 0rem;
  color: ${(props) => (props.$note ? "#818989" : "#BCC6C6")};
`;

const QualificationImage = styled.div`
  width: 15.5rem;
  background-size: cover;
  background-position: center;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
`;
