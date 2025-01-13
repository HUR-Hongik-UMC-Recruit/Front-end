import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PartQualifications = ({ part }) => {
  const Partqualifications = {
    Plan: "자신만의 아이디어로 앱/웹 프로젝트를 진행하고 싶은 사람\n프로젝트를 포기하지 않고 이끌어갈 책임감이 있는 사람\n※ Plan 파트는 반드시 프로젝트 팀장을 맡아야 합니다.",
    Design:
      "UI/UX에 관심이 있는 사람\n포기하지 않고 적극적으로 앱/웹 디자인 공부할 사람",
    Android:
      "포기하지 않고 자기주도적으로 공부할 수 있는 사람\n지원하는 분야의 언어 기초가 있고, 개발 경험이 있는 사람\n※ UMC에서는 '언어'를 알려드리지 않습니다.",
    iOS: "포기하지 않고 자기주도적으로 공부할 수 있는 사람\n지원하는 분야의 언어 기초가 있고, 개발 경험이 있는 사람\n※ UMC에서는 '언어'를 알려드리지 않습니다.",
    Web: "포기하지 않고 자기주도적으로 공부할 수 있는 사람\n지원하는 분야의 언어 기초가 있고, 개발 경험이 있는 사람\n※ UMC에서는 '언어'를 알려드리지 않습니다.",
    Spring:
      "포기하지 않고 자기주도적으로 공부할 수 있는 사람\n지원하는 분야의 언어 기초가 있고, 개발 경험이 있는 사람\n※ UMC에서는 '언어'를 알려드리지 않습니다.",
    "Node.js":
      "포기하지 않고 자기주도적으로 공부할 수 있는 사람\n지원하는 분야의 언어 기초가 있고, 개발 경험이 있는 사람\n※ UMC에서는 '언어'를 알려드리지 않습니다.",
  };

  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.9,
      },
    },
  };

  return (
    <QualificationsContainer
      as={motion.div}
      key={part} // part가 변경될 때마다 애니메이션 재실행
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <QualificationsContent>
        <QualificationHeading>지원 자격</QualificationHeading>
        {Partqualifications[part].split("\n").map((line, index) => (
          <QualificationText key={index} $note={line.startsWith("※")}>
            {line}
          </QualificationText>
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
  border: 1px solid #353838;
  border-radius: 10px;
`;

const QualificationsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const QualificationHeading = styled.h1`
  font-weight: 575;
  font-size: 24px;
  line-height: 135%;
  color: #fbfbfb;
  margin-bottom: 2.5rem;
  margin-top: 0rem;
`;

const QualificationText = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  margin-top: 0rem;
  color: ${(props) => (props.$note ? "#818989" : "#BCC6C6")};
`;

const QualificationImage = styled.div`
  width: 15.5rem;
  background-size: cover;
  background-position: center;
  border-radius: 0px 10px 10px 0px;
`;
