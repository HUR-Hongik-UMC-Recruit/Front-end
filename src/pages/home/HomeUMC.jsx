import styled from "styled-components";
import SectionHeader from "../../components/common/SectionHeader";
import contents from "../../data/home/UMCData";

const HUMCContainer = styled.div`
  background: #111412;
  display: flex;
  width: 100%;
  height: 73.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 18.75rem;
  height: 26.1875rem;
  flex-direction: column;
  background: #1d201e;
  border-radius: 0.625rem;
  border: 1px solid #353838;
`;

const SectionDetail = styled.div`
  display: flex;
  height: 17.1875rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.25rem 2.25rem 0rem 2.25rem;
`;

const SectionTitle = styled.p`
  margin: 0;
  padding-bottom: 1.19rem;

  color: #d1dadb;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.3625rem */
  letter-spacing: -0.0175rem;
`;

const SectionText = styled.p`
  margin: 0;

  color: #818989;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
  align-self: stretch;
`;

const SectionNum = styled.p`
  margin: 0;
  padding: 2.69rem 2.25rem 1.69rem 2.25rem;

  color: #353838;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.3625rem */
  letter-spacing: -0.0175rem;
  align-self: stretch;
`;

const HomeUMC = () => {
  return (
    <HUMCContainer>
      <SectionHeader
        title="홍익대학교 UMC를 소개합니다"
        subtitle="IT 연합 개발 동아리 University Makeus Challenge"
      />
      <SectionContainer>
        {contents.map((content) => (
          <SectionWrapper>
            <SectionDetail>
              <SectionTitle>{content.title}</SectionTitle>
              {content.detail.split("\n").map((line) => (
                <SectionText>{line}</SectionText>
              ))}
            </SectionDetail>
            <SectionNum>{content.id}</SectionNum>
          </SectionWrapper>
        ))}
      </SectionContainer>
    </HUMCContainer>
  );
};

export default HomeUMC;
