import styled from "styled-components";
import ApplicationCommon from "./ApplicationCommon";
import ApplicationPart from "./ApplicationPart";
import ApplyModal from "../../components/application/ApplyModal";
import warning from "../../assets/icons/Warning.png";
import { useState } from "react";

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

const ModalWrapper = styled.div`
  display: flex;
  width: 43.25rem;
  height: 17.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;

  border-radius: 0.75rem;
  border: 1px solid #e1e9ea;
  background: #fcffff;
`;

const WarningImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;

const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ModalTitle = styled.div`
  color: #1d201e;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const ModalDetail = styled.div`
  color: #1d201e;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
`;

const ModalButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`;

const Cancel = styled.button`
  display: flex;
  width: 4.375rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: none;
  border-radius: 0.75rem;
  border: 1.5px solid #edf4f5;

  color: #818989;
  font-family: "Pretendard Variable";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;
`;

const Submit = styled.button`
  display: flex;
  width: 4.375rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 0.75rem;
  background: #2b9176;
  border: none;

  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;

  &:hover {
    border: 1.5px solid #2b9176;
    background: #67b299;
  }
`;

const ApplicationPage = () => {
  // 제출 모달창 open 상태 관리
  const [open, setOpen] = useState(false);

  return (
    <ApplicationContent>
      {/* <Title />
        <Verification />
        <PersonalInfo /> */}
      <ApplicationCommon />
      <ApplicationPart />
      <ButtonWrapper>
        <Button type="submit" onClick={() => setOpen(true)}>
          제출
        </Button>
        <ApplyModal isOpen={open} onClose={() => setOpen(false)}>
          <ModalWrapper>
            <WarningImg src={warning} />
            <ModalText>
              <ModalTitle>제출을 완료하시겠습니까?</ModalTitle>
              <ModalDetail>제출한 내용은 수정할 수 없습니다.</ModalDetail>
            </ModalText>
            <ModalButton>
              <Cancel onClick={() => setOpen(false)}>취소</Cancel>
              <Submit>제출</Submit>
            </ModalButton>
          </ModalWrapper>
        </ApplyModal>
      </ButtonWrapper>
    </ApplicationContent>
  );
};

export default ApplicationPage;
