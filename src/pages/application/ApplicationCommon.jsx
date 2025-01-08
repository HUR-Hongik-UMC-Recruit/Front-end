import { useEffect, useState } from "react";
import styled from "styled-components";
import upload from "../../assets/icons/FileUpload.svg";
import close from "../../assets/icons/FileClose.svg";

const CommonContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const CommonWrapper = styled.div``;

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
  gap: 1.5rem;
  width: 23.3125rem;
  height: 6.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  border: 1.5px solid #d1dadb;
  background: #fcffff;
`;

const FileInfo = styled.div`
  color: #353838;
  font-size: 1.2rem;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ApplicationCommon = ({ handleAnswerChange, setFileDTO }) => {
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

  return (
    <CommonContainer>
      <CommonWrapper>
        <CommonTitle>공통 질문</CommonTitle>

        <CommonBorder />

        <QuestionWrapper>
          <Question>
            1. UMC 지원 동기와 UMC 활동을 통해 기대하는 바를 서술해주세요.
          </Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(0, e)}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>2. 본인의 장단점에 대해 서술해주세요.</Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(1, e)}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <Question>3. UMC에 임하는 각오를 서술해주세요.</Question>
          <AnswerBig
            type="text"
            placeholder="500자 이하로 얘기해주세요"
            onChange={(e) => handleAnswerChange(2, e)}
          />
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
          />
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
                <FileInfo>{file.name}</FileInfo>
                <DeleteButton onClick={handleDeleteFile}>
                  <img
                    src={close}
                    style={{ height: "1.75rem", width: "1.75rem" }}
                  />
                </DeleteButton>
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
          />
        </QuestionWrapper>
      </CommonWrapper>
    </CommonContainer>
  );
};

export default ApplicationCommon;
