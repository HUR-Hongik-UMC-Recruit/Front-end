import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import contents from "../../data/home/ActivityData";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ActivityContainer = styled.div`
  width: 100%;
  height: 60.1rem;
  background: #111412;
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.75rem;
  align-items: center;
  justify-content: center;
`;

const ActivityList = styled.div`
  display: grid;
  width: 55.2rem;
  height: 20.8rem;
  gap: 3.12rem;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: space-between;
`;

const Activity = styled(motion.div)`
  border-top: 0.0625rem solid #5c6161;
  padding-top: 0.88rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 16.3125rem;
`;

const ActivityName = styled.div`
  color: #edf4f5;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 570;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const ActivityDate = styled.div`
  color: #bcc6c6;
  font-family: "Pretendard Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 1.75rem */
  letter-spacing: -0.0125rem;
`;

const HomeActivity = () => {
  // 해당 파트가 사용자의 화면에 들어왔을 때 애니메이션 시작할 수 있게 하는 코드
  const [visibleSections, setVisibleSections] = useState(
    Array(contents.length).fill(false)
  );

  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleSections((prev) => {
              const newVisibleSections = [...prev];
              newVisibleSections[index] = true;
              return newVisibleSections;
            });
            observer.unobserve(entry.target); // 한 번만 애니메이션을 실행하도록 설정
          }
        });
      },
      [contents]
    );

    ref.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <ActivityContainer>
      <ActivityWrapper>
        <SectionHeader
          title="활동 일정"
          subtitle="UMC는 6개월동안 다양한 활동을 진행해요"
        />
        <ActivityList>
          {contents.map((content, index) => (
            <Activity
              key={content.id}
              data-index={index}
              ref={(el) => (ref.current[index] = el)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections[index] ? 1 : 0,
                y: visibleSections[index] ? 0 : 20,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.2,
              }}
            >
              <ActivityName>{content.activity}</ActivityName>
              <ActivityDate>{content.date}</ActivityDate>
            </Activity>
          ))}
        </ActivityList>
      </ActivityWrapper>
    </ActivityContainer>
  );
};

export default HomeActivity;
