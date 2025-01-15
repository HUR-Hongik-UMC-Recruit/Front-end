import styled from "styled-components";
import { useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ArrowLeft from "../../assets/icons/arrow/ArrowLeft.svg";
import ArrowRight from "../../assets/icons/arrow/ArrowRight.svg";
import contents from "../../data/home/PartData";
import { motion } from "motion/react";

const PartContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 59.4rem;
`;

const PartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  gap: 5.75rem;
`;

const ContentsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 20.375rem;
  overflow: hidden;
  position: relative;
`;

const BeforeButton = styled.button`
  position: absolute;
  left: 4.4375rem;
  top: 8.75rem;

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
  top: 8.75rem;

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
  justify-content: center;
  width: 100%;
  height: 20.375rem;
`;

const Part = styled.div`
  display: flex;
  width: 47.25rem;
  align-items: flex-start;
  gap: 6rem;
`;

const PartText = styled.div`
  color: #f6fbfb;
  font-family: "Pretendard Variable";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 550;
  line-height: 135%; /* 3.0375rem */
  letter-spacing: -0.0225rem;
`;

const PartDetail = styled.div`
  color: #a2abab;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 170%; /* 2.025rem */
`;

const PartButtonWrapper = styled.div`
  display: flex;
  width: 65.375rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const PartButton = styled.div`
  color: #5c6161;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
  text-align: center;
  width: 7.25rem;
  cursor: pointer;

  &.active {
    border-bottom: 0.063rem solid #fcffff;
    color: #fcffff;
  }
`;

const HomePart = () => {
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
        <ContentsWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 1 },
          }}
        >
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
                  <PartText>{content.part}</PartText>
                  <PartDetail>{content.detail}</PartDetail>
                </Part>
              </Slide>
            ))}
            <NextButton onClick={nextButtonClick}>
              <img src={ArrowRight} />
            </NextButton>
          </SlideContainer>
        </ContentsWrapper>
      </PartWrapper>
    </PartContainer>
  );
};

export default HomePart;
