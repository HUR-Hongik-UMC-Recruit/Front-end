import { useState } from "react";
import TableLayout from "../../components/admin/TableLayout";
import EmailTable from "../../components/admin/EmailTable";
import RecruitAlertEmailData from "../../data/admin/RecruitAlertEmailData";
import styled from "styled-components";

const RecruitAlertEmailPage = () => {
  const [activePage, setActivePage] = useState(1);
  const emails = RecruitAlertEmailData;

  const totalItemsCount = emails.length;
  const indexOfLastPost = activePage * 7;
  const indexOfFirstPost = indexOfLastPost - 7;
  const currentEmails = emails.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    // 페이지 변경
    setActivePage(pageNumber);
  };

  const tableProps = {
    title: "모집 알림 이메일",
    subtitle: "모집 알림 이메일 확인 및 전송",
    actionButton: <SendButton>메일 보내기</SendButton>,
    headers: ["", "이메일", "", "", "", "상태"],
    renderRow: (item) => <EmailTable items={[item]} />, // 개별 아이템 단위로 렌더링
    currentItems: currentEmails,
    paginationProps: {
      activePage,
      totalItemsCount,
      handlePageChange,
    },
  };

  return <TableLayout {...tableProps} />;
};

export default RecruitAlertEmailPage;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  padding: 12px 22px;
  background: #5fbda1;
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
