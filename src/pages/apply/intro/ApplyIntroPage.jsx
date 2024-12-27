import Verification from "./Verification";
import PersonalInfo from "./PersonalInfo";
import styled from "styled-components";
import Title from "../../../components/apply/intro/Title";

const ApplyIntroPage = () => {
  return (
    <StyledPage>
      <Title />
      <Verification />
      <PersonalInfo />
    </StyledPage>
  );
};

export default ApplyIntroPage;

const StyledPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;
