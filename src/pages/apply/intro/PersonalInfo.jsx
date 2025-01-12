import React, { useState } from "react";
import Select from "../../../components/apply/intro/Select";

import {
  Section,
  ContentWrapper,
  SectionTitle,
  Divider,
  FormGroup,
  Label,
  RequiredDot,
  Input,
  Grid,
  RadioGroup,
  RadioButton,
  InfoText,
  FormItem,
} from "../../../components/apply/intro/SectionStyles";

const PersonalInfo = ({ applicantDTO, updateApplicantDTO }) => {
  // 재학 상태
  const [status, setStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [experience, setExperience] = useState("");

  // 라디오 버튼 상태 관리
  const [selectedOption, setSelectedOption] = useState("");

  // 라디오 버튼 클릭 핸들러
  const handleRadioClick = (option) => {
    const genderMap = {
      남: "MALE",
      여: "FEMALE",
    };
    setSelectedOption(option);
    updateApplicantDTO("gender", genderMap[option]);
  };

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>기본 인적사항</SectionTitle>
        <Divider />

        {/* 이름, 생년월일, 성별 */}
        <Grid>
          <FormGroup>
            <Label>
              이름 <RequiredDot />
            </Label>
            <Input
              type="text"
              placeholder="유엠씨"
              value={applicantDTO.name}
              onChange={(e) => updateApplicantDTO("name", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>
              생년월일 <RequiredDot />
            </Label>
            <Input
              type="text"
              placeholder="YYYY-MM-DD"
              value={applicantDTO.birth}
              onChange={(e) => updateApplicantDTO("birth", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>
              성별 <RequiredDot />
            </Label>
            <RadioGroup>
              <RadioButton
                $active={selectedOption === "남"}
                onClick={() => handleRadioClick("남")}
              >
                남
              </RadioButton>

              <RadioButton
                $active={selectedOption === "여"}
                onClick={() => handleRadioClick("여")}
              >
                여
              </RadioButton>
            </RadioGroup>
          </FormGroup>
        </Grid>

        {/* 닉네임, 학번, 재학 여부 */}
        <Grid>
          <FormGroup>
            <Label>
              닉네임 <RequiredDot />
            </Label>
            <FormItem>
              <Input
                type="text"
                placeholder="예) 밍밍"
                value={applicantDTO.nickName}
                onChange={(e) => updateApplicantDTO("nickName", e.target.value)}
              />
              <InfoText>사용할 닉네임을 적어주세요!</InfoText>
            </FormItem>
          </FormGroup>

          <FormGroup>
            <Label>
              학번 <RequiredDot />
            </Label>
            <Input
              type="text"
              placeholder="C123456"
              value={applicantDTO.studentId}
              onChange={(e) => updateApplicantDTO("studentId", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>
              재학 여부 <RequiredDot />
            </Label>
            <Select
              options={["재학", "휴학", "졸업"]}
              defaultValue="재학 여부 선택"
              value={status}
              onChange={(e) => {
                const statusMap = {
                  재학: "IN_SCHOOL",
                  휴학: "STOP_SCHOOL",
                  졸업: "GRADUATE",
                };
                setStatus(e);
                updateApplicantDTO("gradeStatus", statusMap[e]); // 상태에 따라 적절한 값으로 업데이트
              }}
              type="status"
            />
          </FormGroup>
        </Grid>

        {/* 학과, 학년, UMC 활동 경험 */}
        <Grid>
          <FormGroup>
            <Label>
              학과 <RequiredDot />
            </Label>
            <Input
              type="text"
              placeholder="컴퓨터공학과"
              value={applicantDTO.major}
              onChange={(e) => updateApplicantDTO("major", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>
              학년 <RequiredDot />
            </Label>
            <FormItem>
              <Select
                options={["1학년", "2학년", "3학년", "4학년"]}
                defaultValue="학년 선택"
                value={grade}
                onChange={(e) => {
                  const statusMap = {
                    "1학년": "FIRST",
                    "2학년": "SECOND",
                    "3학년": "THIRD",
                    "4학년": "FOURTH",
                  };
                  setGrade(e);
                  updateApplicantDTO("grade", statusMap[e]); // 상태에 따라 적절한 값으로 업데이트
                }}
                type="grade"
              />
              <InfoText>2학년을 마치고 휴학한 경우 '2학년 휴학' 선택</InfoText>
            </FormItem>
          </FormGroup>

          <FormGroup>
            <Label>
              UMC 활동 경험 <RequiredDot />
            </Label>
            <Select
              options={["없음", "있음"]}
              defaultValue="활동 경험 선택"
              value={experience}
              onChange={(e) => {
                const statusMap = {
                  없음: "YB",
                  있음: "OB",
                };
                setExperience(e);
                updateApplicantDTO("experience", statusMap[e]); // 상태에 따라 적절한 값으로 업데이트
              }}
              type="experience"
            />
          </FormGroup>
        </Grid>

        {/* 연락처 */}
        <FormGroup>
          <Label>
            연락처 <RequiredDot />
          </Label>
          <Input
            type="tel"
            placeholder="010-0000-0000"
            value={applicantDTO.phone}
            onChange={(e) => updateApplicantDTO("phone", e.target.value)}
          />
        </FormGroup>

        {/* 디스코드 사용 이메일 */}
        <FormGroup>
          <Label>
            디스코드 (Discord) 사용 이메일 <RequiredDot />
          </Label>
          <Input
            type="email"
            placeholder="example123@gmail.com"
            value={applicantDTO.discordEmail}
            onChange={(e) => updateApplicantDTO("discordEmail", e.target.value)}
          />
        </FormGroup>

        {/* 노션 사용 이메일 */}
        <FormGroup>
          <Label>
            노션 (Notion) 사용 이메일 <RequiredDot />
          </Label>
          <Input
            type="email"
            placeholder="example123@gmail.com"
            value={applicantDTO.notionEmail}
            onChange={(e) => updateApplicantDTO("notionEmail", e.target.value)}
          />
        </FormGroup>

        {/* UMC를 알게된 경로 */}
        <FormGroup>
          <Label>
            UMC를 알게된 경로 <RequiredDot />
          </Label>
          <Input
            type="text"
            placeholder="예) 에브리타임, 인스타그램, 지인 등"
            value={applicantDTO.umcRoute}
            onChange={(e) => updateApplicantDTO("umcRoute", e.target.value)}
          />
        </FormGroup>

        {/* 현재 활동 중이거나 활동 예정인 동아리 */}
        <FormGroup>
          <Label>
            현재 활동 중이거나 활동 예정인 동아리 (UMC 제외) <RequiredDot />
          </Label>
          <Input
            type="text"
            placeholder="과 내 학술 소모임 1개"
            value={applicantDTO.currentClub}
            onChange={(e) => updateApplicantDTO("currentClub", e.target.value)}
          />
        </FormGroup>
      </ContentWrapper>
    </Section>
  );
};

export default PersonalInfo;
