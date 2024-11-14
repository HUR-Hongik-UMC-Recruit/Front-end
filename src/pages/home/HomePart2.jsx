import styled from "styled-components";
import { useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import ArrowRight from "../../assets/icons/ArrowRight.png";
import contents from "../../components/home/PartData";

const PartContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 66.8rem;
`;

const PartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  gap: 3rem;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 27.75rem;
  overflow: hidden;
  position: relative;
`;

const BeforeButton = styled.button`
  position: absolute;
  left: 4.4375rem;
  bottom: 12.375rem;

  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  right: 4.4375rem;
  bottom: 12.375rem;

  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: none;
  cursor: pointer;
`;

const Slide = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &.active {
    opacity: 1;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4.5rem;
  background: #353838;
  width: 100%;
`;

const Part = styled.div`
  display: flex;
  width: 35.0625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 6rem;
`;

const PartText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

const PartBig = styled.h2`
  margin: 0;

  color: #f6fbfb;
  font-family: "Pretendard Variable";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 3.0375rem */
  letter-spacing: -0.0225rem;
`;

const PartSmall = styled.div`
  color: #e1e9ea;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const PartDetail = styled.div`
  color: #a2abab;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const PartPhoto = styled.img``;

const PartButtonWrapper = styled.div`
  display: flex;
  width: 65.375rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  margin-top: 7rem;
`;

const PartButton = styled.div`
  color: #5c6161;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;

  cursor: pointer;

  &.active {
    border-bottom: 1px solid #fcffff;
    color: #fcffff;
  }
`;

const HomePart2 = () => {
  const [index, setIndex] = useState(1);

  const beforeButtonClick = () => {
    setIndex((current) => (current === 1 ? contents.length : current - 1));
  };

  const nextButtonClick = () => {
    setIndex((current) => (current === contents.length ? 1 : current + 1));
  };

  const partClick = (index) => {
    setIndex(index);
  };

  return (
    <PartContainer>
      <PartWrapper>
        <SectionHeader
          title="파트 소개"
          subtitle="UMC는 7개의 파트로 나누어져 있어요"
        />

        <PartButtonWrapper>
          {contents.map((content) => (
            <PartButton
              key={content.id}
              className={content.id === index ? "active" : null}
              onClick={() => partClick(content.id)}
            >
              {content.part}
            </PartButton>
          ))}
        </PartButtonWrapper>

        <SlideContainer>
          <BeforeButton onClick={beforeButtonClick}>
            <img src={ArrowLeft} />
          </BeforeButton>
          {contents.map((content) => (
            <Slide
              key={content.id}
              className={content.id === index ? "active" : null}
            >
              <Part>
                <PartText>
                  <PartBig>{content.big}</PartBig>
                  <PartSmall>{content.small.split("\n")}</PartSmall>
                </PartText>
                <PartDetail>{content.detail}</PartDetail>
              </Part>
              <PartPhoto src={content.photo} />
            </Slide>
          ))}
          <NextButton onClick={nextButtonClick}>
            <img src={ArrowRight} />
          </NextButton>
        </SlideContainer>
      </PartWrapper>
    </PartContainer>
  );
};

export default HomePart2;