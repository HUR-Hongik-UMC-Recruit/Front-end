import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitle>
      <h1>UMC 8기 지원서</h1>
      <p>열정 넘치는 당신을 알려주세요. 합격을 기원합니다!</p>
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

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111412;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
    color: #111412;
    margin: 0;
  }
`;

export default Title;
