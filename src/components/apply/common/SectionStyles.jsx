import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 90rem;
  padding: 0 13.438rem 6.875rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b9176;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Divider = styled.div`
  height: 0.188rem;
  margin-bottom: 2.938rem;
  background: #e1e9ea;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  margin-top: 3.313rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 600;
  color: #1d201e;
`;

export const RequiredDot = styled.span`
  width: 0.688rem;
  height: 0.688rem;
  background: #90e6c9;
  border-radius: 50%;
`;

export const Input = styled.input`
  box-sizing: border-box; // padding이 height에 포함되도록
  width: 100%;
  height: 3.75rem;
  padding: 0.938rem 1.125rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #353838;
  font-family: "Pretendard Variable";

  &::placeholder {
    color: #818989;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3.75rem;
  background: #5fbda1;
  border: 1px solid #2b9176;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const DisabledButton = styled(Button)`
  background: #d1dadb;
  border-color: #a2abab;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioButton = styled.button`
  cursor: pointer;
  color: #353838;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  line-height: 1.875rem;
  flex: 1;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5rem;
  gap: 16px;
  background: ${(props) => (props.active ? "#DFFAF1" : "#FCFFFF")};
  border: 2px solid ${(props) => (props.active ? "#2B9176" : "#D1DADB")};
  border-radius: 0.75rem;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: #353838;
`;

export const RadioCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${(props) => (props.active ? "#2B9176" : "#BCC6C6")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioDot = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  background: #2b9176;
  border-radius: 50%;
`;

export const TextArea = styled.textarea`
  font-family: "Pretendard Variable";
  height: 15.063rem;
  padding: 0.938rem 1.125rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  resize: none;
  font-size: 1rem;
  color: #353838;

  &::placeholder {
    color: #818989;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const InfoText = styled.p`
  color: #2b9176;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem;
  letter-spacing: 0.009remx;
  margin: 0;
  margin-left: 1.25rem;
  white-space: pre-line; // 줄바꿈
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem; // InfoText와의 간격만을 위한 gap
`;

export const StyledRadioGroup = styled(RadioGroup)`
  ${RadioButton} {
    width: 210px;
    flex: 13.125rem;
  }
`;