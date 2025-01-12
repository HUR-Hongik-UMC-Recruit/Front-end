import { useEffect, useState } from "react";
import styled from "styled-components";
import upload from "../../assets/icons/Upload.png";
import axios from "axios";

const CommonContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const CommonWrapper = styled.div`
  margin: 0rem 12.3rem;
`;

const CommonTitle = styled.div`
  color: #2b9176;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 575;
  line-height: 1.875rem; /* 125% */
`;

const CommonBorder = styled.div`
  height: 0.1875rem;
  background: #e1e9ea;
  margin: 1rem 0rem 1.5rem 0rem;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
`;

const Question = styled.label`
  color: #1d201e;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
`;

const RadioPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.62rem;
  justify-content: flex-end;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.75rem;
  height: 3.75rem;
  gap: 1.9rem;
`;

const RadioWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 0.75rem;
  border: 1.5px solid #d1dadb;
  background: #fcffff;

  position: relative;
  cursor: pointer;

  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */

  &:hover {
    border: 1.5px solid #2b9176;
    background: #b1e9d6;
  }
`;

const Radio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  margin: -1px;
  clip-path: inset(50%);

  /* 체크된 상태일 때 스타일 변경 */
  &: checked + ${RadioWrapper} {
    font-weight: 550;
    background: #dffaf1;
    border-color: #2b9176;
    color: #353838;
  }
`;

const AnswerBig = styled.textarea`
  font-family: "Pretendard Variable";
  height: 15.063rem;
  padding: 0.938rem 1.125rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  resize: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */
  color: #353838;

  &::placeholder {
    color: #818989;
  }
`;

const Guide = styled.div`
  color: #2b9176;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;

  line-height: 1.875rem;
`;

const AnswerSmall = styled.textarea`
  height: 1.88rem;
  padding: 0.9375rem 1.4375rem;
  background: #fcffff;
  border: 1.5px solid #d1dadb;
  border-radius: 0.75rem;
  resize: none;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */
  color: #353838;

  &::placeholder {
    color: #818989;
  }
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

const FileInput = styled.label`
  display: flex;
  width: 23.3125rem;
  height: 6.375rem;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  cursor: pointer;

  border-radius: 0.75rem;
  border: 1.5px dashed #a2abab;
  background: #fcffff;

  color: #818989;
  font-family: "Pretendard Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
`;

const UploadedFile = styled.div`
  display: flex;
  width: 23.3125rem;
  height: 6.375rem;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  border: 1.5px solid #d1dadb;
  background: #fcffff;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #353838;
  font-size: 1.2rem;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountText = styled.p``;

const ApplicationCommon = ({
  handleAnswerChange,
  setFileDTO,
  charCounts,
  refs,
}) => {
  // 리더 희망 여부
  const [selectLeader, setSelectLeader] = useState("예");
  const leader = ["예", "아니요"];
  const handleRadioChange = (e) => {
    setSelectLeader(e.target.value);
  };

  // 파일 첨부
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    if (e?.target?.files) {
      // 파일 용량 10MB로 제한하기
      const maxSize = 10 * 1024 * 1024;
      const fileSize = e.target.files[0]?.size;
      if (fileSize > maxSize) {
        alert("첨부 파일 사이즈는 5MB 이내로 등록 가능합니다.");
        return;
      }
      setFile(e.target.files[0]);
      setFileDTO(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  // 파일 삭제
  const handleDeleteFile = () => {
    setFile(null);
  };

  // 질문 조회 api
  const [questions, setQuestions] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  const getQuestions = async () => {
    try {
      const response = await axios.get(`${apiUrl}/applicant/questions/COMMON`);
      if (response.data.isSuccess) {
        setQuestions(response.data.result.questions); // questions 배열로 설정
        console.log(response.data.result.questions);
      } else {
        console.error("API 호출 실패: ", response.data.message);
        setQuestions([]); // 실패 시 빈 배열로 설정
      }
    } catch (e) {
      console.log("공통질문 에러 발생: ", e);
    }
  };
  // useEffect(() => {
  //   getQuestions();
  // }, []);

  return (
    <CommonContainer>
      <CommonWrapper>
        <CommonTitle>공통 질문</CommonTitle>

        <CommonBorder />

        {/* 
        {questions.map((question) => (
          <QuestionWrapper key={question.questionId}>
            <Question>
              {question.questionId}. {question.questionText}
            </Question>
            <AnswerBig placeholder="500자 이하로 얘기해주세요"></AnswerBig>
          </QuestionWrapper>
        ))} 
        */}

        <QuestionWrapper>
          <Question>
            1. UMC 지원 동기와 UMC 활동을 통해 기대하는 바를 서술해주세요.
          </Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(0, e)}
            maxLength={499}
            ref={refs[0]}
          />
          <CountText>{charCounts[0]}/500자</CountText>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>2. 본인의 장단점에 대해 서술해주세요.</Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(1, e)}
            maxLength={499}
            ref={refs[1]}
          />
          <CountText>{charCounts[1]}/500자</CountText>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>3. UMC에 임하는 각오를 서술해주세요.</Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(2, e)}
            maxLength={499}
            ref={refs[2]}
          />
          <CountText>{charCounts[2]}/500자</CountText>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>
            4. UMC는 학기 중에 배운 것을 바탕으로 방학 동안 팀을 구성해 앱
            런칭을 진행합니다. 실제로 어떤 서비스를 개발하고 싶은지
            서술해주세요.
          </Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(3, e)}
            maxLength={499}
            ref={refs[3]}
          />
          <CountText>{charCounts[3]}/500자</CountText>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>
            5. (포트폴리오 첨부) 협업하면서 어려웠던 점과 협업을 어떻게
            진행했는지, 해당 프로젝트를 진행한 이유와 프로젝트 내 나의 파트 등을
            자세하게 서술해주세요. 디자인 혹은 협업 경험이 없는 경우
            자기소개서를 제출하셔도 괜찮습니다.
          </Question>
          <FileWrapper>
            {!file ? (
              <>
                <FileInput htmlFor="file">
                  <img
                    src={upload}
                    style={{ height: "1.75rem", width: "1.75rem" }}
                  />
                  파일 첨부
                </FileInput>
                <input
                  type="file"
                  accept="application/pdf"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </>
            ) : (
              <UploadedFile>
                <FileInfo>
                  <img src={upload} />
                  {file.name}
                </FileInfo>
                <DeleteButton onClick={handleDeleteFile}>✕</DeleteButton>
              </UploadedFile>
            )}
            <Guide>
              하나의 PDF 파일로 병합 후 제출 부탁드립니다.
              <br />
              최대 파일 크기는 10MB입니다.
            </Guide>
          </FileWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>
            6. GitHub를 이용해 프로젝한 경험이 있다면 GitHub 주소를 남겨주세요.
          </Question>
          <AnswerSmall
            type="text"
            placeholder="예) http://github.com/example"
            onChange={(e) => handleAnswerChange(4, e)}
            ref={refs[4]}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>7. 스터디 리더를 희망하시나요?</Question>
          <Guide>
            스터디 리더란 매주 진행되는 스터디의 리더를 의미합니다. 선수 지식이
            있지 않아도 열심히 공부할 열정과 책임감이 있다면 스터디 리더 지원이
            가능합니다. 이후에 스터디 리더 지원을 따로 받을 예정이며, 스터디
            리더 확정이 아니니 부담가지지 않으셔도 됩니다.
          </Guide>
          <RadioPartWrapper>
            {leader.map((answer, idx) => (
              <RadioLabel key={idx}>
                <Radio
                  type="radio"
                  name="leader"
                  value={answer}
                  onChange={handleRadioChange}
                />
                <RadioWrapper checked={idx === selectLeader} key={answer}>
                  {answer}
                </RadioWrapper>
              </RadioLabel>
            ))}
          </RadioPartWrapper>
        </QuestionWrapper>
      </CommonWrapper>
    </CommonContainer>
  );
};

export default ApplicationCommon;
