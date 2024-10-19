import styled from "styled-components";
import { ReactComponent as SendIcon } from "../../assets/icons/SendIcon.svg";
import BackgroundSvg from "../../assets/images/recruitment_background/background.svg";

const RecruitmentClosed = () => {

  const handleIconClick = () => {
    console.log("제출 완료");
  };

  return (
    <BackgroundContainer>
      <ContentWrapper>
        <Title>지금은 모집 기간이 아닙니다</Title>
        <Description>UMC 8기 모집 알림을 신청하고 가장 빠르게 모집 소식을 들어보세요.</Description>
        <InputField type="email" placeholder="모집 알림을 받을 메일 주소를 입력해주세요" />
        <StyledSendIcon onClick={handleIconClick} />
        <SeparatorLine />
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default RecruitmentClosed;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 37rem;
  background-image: url(${BackgroundSvg});
  background-size: cover;
  background-position: center top;
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 12.438rem 11.875rem 21.5rem;
  margin-left: -24rem;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 48.6px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.438rem;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 29.7px;
  font-weight: 400;
  margin-bottom: 7.063rem;
  color: rgba(188, 198, 198, 1);
`;

const InputField = styled.input`
  height: 2.75rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  outline:none;
  border: none;
  background-color: transparent;
  width: 46.688rem;
  color: rgba(129, 137, 137, 1);
  caret-color: rgba(129, 137, 137, 1);
`;

const StyledSendIcon = styled(SendIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin-bottom: -0.5rem;
`;

const SeparatorLine = styled.div`
  width: 49.875rem;
  border: 0.10625rem solid #5C6161;
  flex-grow: 0;
`;
