import styled from "styled-components";
import warning from "../../assets/icons/Warning.png";
import { useEffect } from "react";

const CustomToast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 65rem;
  height: 10.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background: #111412;
  box-shadow: 0px 0px 10px 0px #8a8a8a;
`;

const ToastImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;

const ToastDeatil = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToastTitle = styled.div`
  color: #f49799;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 2.025rem */
  letter-spacing: -0.015rem;
`;

const ToastMessage = styled.div`
  color: #e1e9ea;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 1.63125rem */
`;

const ToastPopup = ({ setToast, title, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <CustomToast>
      <ToastImg src={warning} />
      <ToastDeatil>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </ToastDeatil>
    </CustomToast>
  );
};

export default ToastPopup;
