import styled from "styled-components";

const Container = styled.div`
  background: #111412;
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;

  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

const NotFoundPage = () => {
  return <Container>Not Found Page</Container>;
};

export default NotFoundPage;
