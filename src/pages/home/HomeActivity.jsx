import SectionHeader from "../../components/common/SectionHeader";

const HomeActivity = () => {
  const contents = [
    "헤커톤",
    "컨퍼런스",
    "MT",
    "프리미팅 데이",
    "중앙 MT",
    "앱 / 웹 개발 프로젝트",
  ];

  return (
    <ActivityContainer>
      <SectionHeader
        title="활동 소개"
        subtitle="UMC는 6개월동안 다양한 활동을 진행해요"
      />
      {contents.map((content) => (
        <ActivityWrapper>
          {content}
          <img />
        </ActivityWrapper>
      ))}
    </ActivityContainer>
  );
};

export default HomeActivity;
