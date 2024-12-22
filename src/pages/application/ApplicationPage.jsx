import styled from "styled-components";
import ApplicationCommon from "./ApplicationCommon";
import ApplicationPart from "./ApplicationPart";

const ApplicationContent = styled.div`
  // margin: 5rem 12.3rem 14rem 12.3rem;
  margin-bottom: 14rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 12.3rem;
`;

const Button = styled.button`
  display: flex;
  width: 10rem;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.75rem;
  border: 1px solid #2b9176;
  background: #5fbda1;

  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */

  &:hover {
    border-radius: 0.75rem;
    border: 1.5px solid #2b9176;
    background: #67b299;
  }
`;

const ApplicationPage = () => {
  return (
    <ApplicationContent>
      {/* <Title />
        <Verification />
        <PersonalInfo /> */}
      <ApplicationCommon />
      <ApplicationPart />
      <ButtonWrapper>
        <Button type="submit">다음</Button>
      </ButtonWrapper>
    </ApplicationContent>
  );
};

export default ApplicationPage;
