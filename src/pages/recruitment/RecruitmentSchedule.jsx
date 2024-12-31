import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";

const RecruitmentSchedule = () => {
  const scheduleData = [
    { title: "서류 접수", date: "08.26 (월) ~ 09.06 (금)" },
    { title: "1차 발표", date: "09.08 (일)" },
    { title: "면접", date: "09.09 (월) ~ 09.11 (수)" },
    { title: "최종 발표", date: "09.13 (금)" },
  ];

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <ScheduleContent>
          <SectionHeader title="모집 일정" subtitle="Recruitment Schedule" />
          <TimelineContainer>
            <TimelineBar>
              <TimelineLine />
              <TimelinePoints>
                {Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <TimelinePoint key={index} />
                  ))}
              </TimelinePoints>
            </TimelineBar>
            <ScheduleItems>
              {scheduleData.map((item, index) => (
                <ScheduleItem key={index}>
                  <ScheduleTitle>{item.title}</ScheduleTitle>
                  <ScheduleDate>{item.date}</ScheduleDate>
                </ScheduleItem>
              ))}
            </ScheduleItems>
          </TimelineContainer>
          <Note>※ 서류 및 최종 합격 발표 일정은 지연될 수 있습니다.</Note>
        </ScheduleContent>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 44.188rem;
  background-color: #111412;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 13.438rem 15rem;
  width: 90rem;
`;

const ScheduleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68.75rem;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -0.25rem;
`;

const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
`;

const TimelineLine = styled.div`
  position: absolute;
  width: 100%;
  height: 0.5rem;
  top: 0.25rem;
  background: #353838;
  border-radius: 0.781rem;
`;

const TimelinePoints = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 51.063rem;
  left: 9.281rem;
  top: 0;
`;

const TimelinePoint = styled.div`
  width: 1rem;
  height: 1rem;
  background: #90e6c9;
  border-radius: 50%;
`;

const ScheduleItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  width: 64.25rem;
`;

const ScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 14.188rem;
`;

const ScheduleTitle = styled.h3`
  font-weight: 590;
  font-size: 25px;
  line-height: 135%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #edf4f5;
  width: 13.188rem;
`;

const ScheduleDate = styled.p`
  font-weight: 300;
  font-size: 19px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #e1e9ea;
  width: 13.188rem;
  margin-top: 0.5rem;
`;

const Note = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: right;
  letter-spacing: -0.01em;
  color: #bcc6c6;
  width: 100%;
  margin-top: 6.75rem;
`;

export default RecruitmentSchedule;
