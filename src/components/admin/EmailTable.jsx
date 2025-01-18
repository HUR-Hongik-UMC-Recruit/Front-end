import styled from "styled-components";

const EmailTable = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell> {/* 번호 (1번 헤더 아래) */}
          <TableCell>{item.email}</TableCell> {/* 이메일 (2번 헤더 아래) */}
          <TableCell /> {/* 3번 빈 칸 */}
          <TableCell /> {/* 4번 빈 칸 */}
          <TableCell /> {/* 5번 빈 칸 */}
          <TableCell completed={item.completed}>
            {item.completed ? "전송 완료" : "전송 대기"}
          </TableCell>{" "}
          {/* 상태 (6번 헤더 아래) */}
        </TableRow>
      ))}
    </>
  );
};

export default EmailTable;

const TableRow = styled.div`
  display: flex;
  padding: 10px 27px 10px 35px;
  border-bottom: 1px solid #e1e9ea;

  display: grid;
  grid-template-columns: 0.7fr 3fr 2fr 1fr 4fr 0.8fr;
`;

const TableCell = styled.div`
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => (props.completed ? "#2B9176" : "#5C6161")};
  padding: 5px;

  span:last-child {
    // 마지막 요소만 중앙 정렬
    justify-self: center;
  }
`;
