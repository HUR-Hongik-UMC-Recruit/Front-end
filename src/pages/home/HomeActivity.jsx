import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";

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

const Activity = styled.div`
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
  const contents = [
    { activity: "홍익대 OT", date: "3월 중순 예정" },
    { activity: "한강 나들이", date: "4월 초 예정" },
    { activity: "홍익대 MT", date: "4월 말~5월 초 예정" },
    { activity: "중앙 MT", date: "5월 초 예정" },
    { activity: "아이디어톤", date: "5월 말 예정" },
    { activity: "데모데이", date: "8월 말 예정" },
  ];
  return (
    <ActivityContainer>
      <ActivityWrapper>
        <SectionHeader
          title="활동 소개"
          subtitle="UMC는 6개월동안 다양한 활동을 진행해요"
        />
        <ActivityList>
          {contents.map((content, index) => (
            <Activity key={content.id}>
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
