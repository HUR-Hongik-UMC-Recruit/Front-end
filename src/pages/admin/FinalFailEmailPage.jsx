import { useState } from "react";
import TableLayout from "../../components/admin/TableLayout";
import FinalFailTable from "../../components/admin/FinalFailTable";
import FinalFailEmailData from "../../data/admin/FinalFailEmail";
import styled from "styled-components";

const FinalFailEmailPage = () => {
  const [activePage, setActivePage] = useState(1);
  const emails = FinalFailEmailData;

  const totalItemsCount = emails.length;
  const indexOfLastPost = activePage * 7;
  const indexOfFirstPost = indexOfLastPost - 7;
  const currentEmails = emails.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    // 페이지 변경
    setActivePage(pageNumber);
  };

  const tableProps = {
    title: "최종 불합격 이메일",
    subtitle: "최종 불합격자 확인 및 이메일 전송",
    actionButton: <SendButton>최종 불합격 메일 보내기</SendButton>,
    headers: ["이름", "이메일", "전화번호", "파트", "최종합/불", "상태"],
    renderRow: (item) => <FinalFailTable items={[item]} />, // 개별 아이템 단위로 렌더링
    currentItems: currentEmails,
    paginationProps: {
      activePage,
      totalItemsCount,
      handlePageChange,
    },
  };

  return <TableLayout {...tableProps} />;
};

export default FinalFailEmailPage;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.938rem;
  height: 2.813rem;
  padding: 0.063rem 1rem;
  background: #FF948A;
  border-radius: 0.313rem;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 1.25rem;
  color: #ffffff;

  font-family: "Pretendard Variable";
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 0.009rem;
`;
