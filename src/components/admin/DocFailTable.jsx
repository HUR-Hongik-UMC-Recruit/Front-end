import styled from "styled-components";

const DocFailTable = ({ items }) => {
    console.log('items에 뭐가 담겼냐', items);

  return (
    <>
      {items.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell> {/* 이름름 (1번 헤더 아래) */}
          <TableCell>{item.email}</TableCell> {/* 이메일 (2번 헤더 아래) */}
          <TableCell>{item.phone}</TableCell>
          <TableCell>{item.part}</TableCell>
          <TableCell $isPassed={item.docPassStatus}>
            {item.docPassStatus === false ? "불합격" : ""}
          </TableCell>
          <TableCell $completed={item.completed}>
            {item.completed ? "전송 완료" : "전송 대기"}
          </TableCell>{" "}
          {/* 상태 (6번 헤더 아래) */}
        </TableRow>
      ))}
    </>
  );
};

export default DocFailTable;

const TableRow = styled.div`
  display: flex;
  padding: 10px 27px 10px 35px;
  border-bottom: 1px solid #e1e9ea;

  display: grid;
  grid-template-columns: 0.9fr 3fr 2fr 1.2fr 4fr 0.8fr;
`;

const TableCell = styled.div`
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) =>
    props.$isPassed === false ? 600 : 400}; /* docPassStatus가 fail일 경우 600 */
  line-height: 24px;
  color: ${(props) =>
    props.$isPassed === false
      ? "#FF948A"
      : "#5C6161"}; /* docPassStatus가 fail일 경우 #FF948A (불합격) */
  padding: 5px;

  span:last-child {
    // 마지막 요소만 중앙 정렬
    justify-self: center;
  }
`;