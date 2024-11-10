import { styled } from "styled-components";

const FooterContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 10.0625rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 2.875rem 10.625rem;
`;

const FooterUMC = styled.div`
  color: #bcc6c6;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%; /* 1.63125rem */
`;

const FooterCopyright = styled.div`
  color: #bcc6c6;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%; /* 1.54063rem */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterUMC>UMC</FooterUMC>
        <FooterCopyright>
          Copyright ⓒ 2024 UMC. All Rights Reserved
        </FooterCopyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
