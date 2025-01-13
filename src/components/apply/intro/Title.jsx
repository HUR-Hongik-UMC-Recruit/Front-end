import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitle>
      <h1>UMC 8기 지원서</h1>
      <p>
        새로고침 시 작성한 내용이 사라집니다.{"\n"}
        작성 시 유의 부탁드립니다.
      </p>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 9.438rem;
  margin-bottom: 7.375rem;
  text-align: center;
  font-family: "Pretendard Variable";
  letter-spacing: -0.025rem;
  line-height: 1.875rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111412;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
    color: #111412;
    margin: 0rem;
    white-space: pre-wrap;
  }
`;

export default Title;
