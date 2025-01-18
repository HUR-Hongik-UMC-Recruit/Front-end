import { useState } from "react";
import TableLayout from "../../components/admin/TableLayout";
import DocPassTable from "../../components/admin/DocPassTable";
import DocPassEmailData from "../../data/admin/DocPassEmailData";
import styled from "styled-components";

const DocPassEmailPage = () => {
  const [activePage, setActivePage] = useState(1);
  const emails = DocPassEmailData;

  const totalItemsCount = emails.length;
  const indexOfLastPost = activePage * 7;
  const indexOfFirstPost = indexOfLastPost - 7;
  const currentEmails = emails.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    // 페이지 변경
    setActivePage(pageNumber);
  };

  const tableProps = {
    title: "서류 합격 이메일",
    subtitle: "서류 합격자 확인 및 이메일 전송",
    actionButton: <SendButton>서류 합격 메일 보내기</SendButton>,
    headers: ["이름", "이메일", "전화번호", "파트", "서류합/불", "상태"],
    renderRow: (item) => <DocPassTable items={[item]} />, // 개별 아이템 단위로 렌더링
    currentItems: currentEmails,
    paginationProps: {
      activePage,
      totalItemsCount,
      handlePageChange,
    },
  };

  return <TableLayout {...tableProps} />;
};

export default DocPassEmailPage;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 45px;
  padding: 11px 22px;
  background: #60C1C3;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 20px;
  color: #ffffff;

  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 0.15px;
`;
