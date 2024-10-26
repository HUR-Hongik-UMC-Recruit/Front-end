import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/recruitment/SectionHeader";

const Notice = () => {
  return (
    <BackgroundContainer>
      <ContentWrapper>
        <SectionHeader title="지원 시 유의사항" subtitle="Notice" />
        <NoticeContainer>
          <NoticeText>
            12주 동안 스터디를 진행한 후, 방학 기간 동안 사이드 프로젝트를 진행합니다.<br /><br /><br />
            UMC에는 삼진아웃 제도가 있습니다.<br/>12주 동안 매주 진행되는 스터디 미참여 및 준비 미흡 등으로 총 -3점이 될 경우 동아리 활동에 제한이 있습니다. 성실하게 참여할 분을 모집합니다.<br /><br /><br />
            모든 소통은 디스코드 (Discord)를 통해서 이루어집니다. 디스코드 서버 가입이 이메일을 통해 이루어지므로, 기존 계정이 없는 경우 가입 부탁드립니다.
          </NoticeText>
        </NoticeContainer>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default Notice;

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 46.188rem;
  background-color: #111412;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 191.5rem;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8.5rem 13.438rem 15rem;
  max-width: 63rem;
  height: 46.188rem;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 988px;
  background: rgba(29, 32, 30, 1);
  border: 1px solid #353838;
  border-radius: 10px;
`;

const NoticeText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #E1E9EA;
  text-align: left;
  margin: 0px;
`;