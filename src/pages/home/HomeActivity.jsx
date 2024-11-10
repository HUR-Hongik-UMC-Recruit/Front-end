import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import mouse from "../../assets/icons/mouse.png";
import a from "../../assets/icons/activity/a.png";
import b from "../../assets/icons/activity/b.png";
import c from "../../assets/icons/activity/c.png";
import d from "../../assets/icons/activity/d.png";
import e from "../../assets/icons/activity/e.png";
import f from "../../assets/icons/activity/f.png";

const ActivityContainer = styled.div`
  width: 100%;
  height: 70.3rem;
  background: #111412;
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  gap: 10rem;
`;

const ActivityListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.375rem;
`;

const ActivityListFront = styled.div`
  width: 23.9375rem;
  height: 17.625rem;
  position: relative;
`;

const ActivityBackground = styled.img`
  border-radius: 0.9375rem;
`;

const ActivityFrontWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  top: 1.75rem;
  left: 2.13rem;
  position: absolute;
`;

const ActivtyText = styled.p`
  margin: 0;
  color: #edf4f5;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 570;
`;

const ActivityMouse = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const HomeActivity = () => {
  const contents = [
    { activity: "해커톤", background: a },
    { activity: "컨퍼런스", background: b },
    { activity: "MT", background: c },
    { activity: "프리미팅 데이", background: d },
    { activity: "중앙 MT", background: e },
    { activity: "앱 / 웹 개발 프로젝트", background: f },
  ];

  return (
    <ActivityContainer>
      <ActivityWrapper>
        <SectionHeader
          title="활동 소개"
          subtitle="UMC는 6개월동안 다양한 활동을 진행해요"
        />
        <ActivityListWrapper>
          {contents.map((content) => (
            <ActivityListFront>
              <ActivityBackground src={content.background} />
              <ActivityFrontWrapper>
                <ActivtyText>{content.activity}</ActivtyText>
                <ActivityMouse src={mouse} />
              </ActivityFrontWrapper>
            </ActivityListFront>
          ))}
        </ActivityListWrapper>
      </ActivityWrapper>
    </ActivityContainer>
  );
};

export default HomeActivity;
