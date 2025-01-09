import styled from "styled-components";
import ApplicationCommon from "./ApplicationCommon";
import ApplicationPart from "./ApplicationPart";
import ApplyModal from "../../components/application/ApplyModal";
import Title from "../../components/apply/intro/Title";
import Verification from "../apply/intro/Verification";
import PersonalInfo from "../apply/intro/PersonalInfo";
import warning from "../../assets/icons/Warning.svg";
import check from "../../assets/icons/Check.svg";
import { useState } from "react";
import axios from "axios";
import SuccessModal from "../../components/application/SuccessModal";
import ApplicationAgree from "./ApplicationAgree";

const ApplicationContent = styled.div`
  margin: 5rem 12.3rem 14rem 12.3rem;
  margin-bottom: 14rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  width: 10rem;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;

  font-family: "Pretendard Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */

  background-color: ${(props) => (props.disabled ? "#E1E9EA" : "#5fbda1;")};
  color: ${(props) => (props.disabled ? "#A2ABAB" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border:1px solid;
  border-color:${(props) => (props.disabled ? "#ccc" : "#2b9176;")}

  &:hover {
    border-color:${(props) => (props.disabled ? "" : "#2b9176;")}
    background: #4e977f;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  width: 43.25rem;
  height: 17.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 0.75rem;
  border: 1px solid #e1e9ea;
  background: #fcffff;
`;

const ModalImg = styled.img`
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
  font-weight: 600;
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
  background: #5fbda1;
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
    background: #4e977f;
  }
`;

const ModalHomeButton = styled.button`
  display: flex;
  width: 6.56rem;
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

const ApplicationPage = () => {
  // 제출 모달창 open 상태 관리
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleHomeClick = () => {
    setSuccessOpen(false); // 모달 닫기
    // navigate("/"); // 홈으로 이동
    window.location.href = "/";
  };

  // applicantDTO, file 상태 관리
  const [applicantDTO, setApplicantDTO] = useState({
    name: "",
    nickName: "",
    email: "",
    phone: "",
    gender: "",
    birth: "",
    studentId: "",
    major: "",
    grade: "",
    gradeStatus: "",
    experience: "",
    umcRoute: "",
    currentClub: "",
    discordEmail: "",
    notionEmail: "",
    part: "",
    answers: [],
  });
  const [fileDTO, setFileDTO] = useState(null);

  // PersonalInfo에서 사용할 함수(applicantDTO)
  const updateApplicantDTO = (key, value) => {
    setApplicantDTO({ ...applicantDTO, [key]: value });
  };

  // applicantDTO 중 answer 관리할 함수
  const updateAnswer = (questionId, answerText) => {
    setApplicantDTO((prevDTO) => {
      const updatedAnswers = prevDTO.answers.filter(
        (answer) => answer.questionId !== questionId
      );
      updatedAnswers.push({ questionId, answerText });
      return { ...prevDTO, answers: updatedAnswers };
    });
  };

  // ApplicationCommon, ApplicationPart에서 사용할 함수
  const handleAnswerChange = (questionId, e) => {
    console.log(`Question ID: ${questionId}, Answer: ${e.target.value}`);
    updateAnswer(questionId, e.target.value);
  };

  // post 요청 코드
  const handleSubmit = async () => {
    // answers 배열을 applicantDTO에 추가
    applicantDTO.answers = applicantDTO.answers.map((answer, index) => ({
      questionId: index,
      answerText: answer.answerText,
    }));

    // formData 생성
    const formData = new FormData();
    const blob = new Blob([JSON.stringify(applicantDTO)], {
      type: "application/json",
    });
    formData.append("applicantDTO", blob);
    if (fileDTO) {
      formData.append("file", fileDTO);
    }

    console.log(applicantDTO);
    console.log(JSON.stringify(applicantDTO));
    for (const x of formData.entries()) {
      console.log(x);
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      console.log("applicantDTO 내용:", event.target.result); // Blob 내용을 출력
    };
    reader.readAsText(blob); // Blob을 텍스트로 읽기

    // post 요청
    try {
      const response = await axios.post("/applicant/apply", formData);
      console.log("지원서 제출 서버 응답: ", response.data);
      setOpen(false);
      setSuccessOpen(true);
    } catch (e) {
      console.log("지원서 제출 에러 발생: ", e);
    }
  };

  // 모든 항목이 채워져 있는지 검사
  const isFormValid = () => {
    return Object.values(applicantDTO).every((field) =>
      typeof field === "string" ? field.trim() !== "" : field !== ""
    );
  };

  // 약관 동의 여부 상태 관리
  const [infoAgree, setInfoAgree] = useState(false);
  const [passion, setPassion] = useState(false);
  const updateAgreeChange = (infoAgree, passion) => {
    setInfoAgree(infoAgree);
    setPassion(passion);
  };
  const isAllAgreed = infoAgree && passion;

  return (
    <ApplicationContent>
      <Title />
      <Verification />
      <PersonalInfo
        applicantDTO={applicantDTO}
        updateApplicantDTO={updateApplicantDTO}
      />

      <ApplicationCommon
        handleAnswerChange={handleAnswerChange}
        setFileDTO={setFileDTO}
      />
      <ApplicationPart
        updateApplicantDTO={updateApplicantDTO}
        handleAnswerChange={handleAnswerChange}
      />

      <ApplicationAgree updateAgreeChange={updateAgreeChange} />

      <ButtonWrapper>
        <Button
          type="submit"
          disabled={!isAllAgreed}
          onClick={() => {
            setOpen(true);
          }}
        >
          제출
        </Button>
        <ApplyModal isOpen={open} onClose={() => setOpen(false)}>
          <ModalWrapper>
            <ModalImg src={warning} />
            <ModalText>
              <ModalTitle>제출을 완료하시겠습니까?</ModalTitle>
              <ModalDetail>제출한 내용은 수정할 수 없습니다.</ModalDetail>
            </ModalText>
            <ModalButton>
              <Cancel onClick={() => setOpen(false)}>취소</Cancel>
              <Submit onClick={() => handleSubmit()}>제출</Submit>
            </ModalButton>
          </ModalWrapper>
        </ApplyModal>
        <SuccessModal
          isOpen={successOpen}
          onClose={() => setSuccessOpen(false)}
        >
          <ModalWrapper>
            <ModalImg src={check} />
            <ModalText>
              <ModalTitle>제출이 완료되었습니다!</ModalTitle>
              <ModalDetail>지원해주셔서 감사합니다.</ModalDetail>
            </ModalText>
            <ModalHomeButton onClick={handleHomeClick}>
              홈으로 이동
            </ModalHomeButton>
          </ModalWrapper>
        </SuccessModal>
      </ButtonWrapper>
    </ApplicationContent>
  );
};

export default ApplicationPage;
