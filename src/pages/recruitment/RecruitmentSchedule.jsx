import styled from "styled-components";
import SectionHeader from "../../components/recruitment/SectionHeader";

const RecruitmentSchedule = () => {

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <SectionHeader title="모집 일정" subtitle="Recruitment Schedule" />
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default RecruitmentSchedule;

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 44.188rem;
  background-color: #111412;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 147.313rem;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8.5rem 13.438rem 15rem;
  max-width: 63rem;
  height: 44.188rem;
`;