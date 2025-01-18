import styled from "styled-components";
import CustomPagination from "../../components/common/CustomPagination";

const TableLayout = ({
  title,
  subtitle,
  actionButton,
  headers,
  renderRow,
  currentItems,
  paginationProps,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <HeaderSection>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </HeaderSection>

        {actionButton}

        <TableHeader>
          {headers.map((header, index) => (
            <span key={index}>{header}</span>
          ))}
        </TableHeader>

        {/* 각 항목을 renderRow로 렌더링 */}
        {currentItems.map((item, index) => renderRow(item, index))}

        {/* 페이지네이션에 props 전달 */}
        <CustomPagination {...paginationProps} />
      </ContentWrapper>
    </Container>
  );
};
export default TableLayout;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 68.75rem;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 37.8px */
  letter-spacing: -0.28px;
  color: #1d201e;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 32.4px */
  letter-spacing: -0.24px;
  color: #5C6161;
  margin: 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 3fr 2fr 1fr 4fr 0.8fr; /* 6개 헤더 비율 */
  background: #edf4f5;
  border-radius: 10px;
  margin-bottom: 6px;
  padding: 14px 27px 14px 35px;

  span {
    font-family: "Pretendard Variable";
    font-weight: 600;
    font-size: 17px;
    color: #5c6161;
  }

  span:last-child {
    // 마지막 요소만 중앙 정렬
    justify-self: center;
  }
`;
