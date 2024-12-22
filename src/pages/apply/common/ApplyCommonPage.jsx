import Verification from "./Verification";
import PersonalInfo from "./PersonalInfo";
import CommonQuestions from "./CommonQuestions";
import styled from "styled-components";
import Title from "../../../components/apply/common/Title";

const ApplyCommonPage = () => {
  return (
    <StyledPage>
      <Title />
      <Verification />
      <PersonalInfo />
      <CommonQuestions />
    </StyledPage>
  );
};

export default ApplyCommonPage;

const StyledPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;
