import { styled } from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 10.0625rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  background-color: #111412;
  padding: 2.875rem 10.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;
`;

const FooterUMC = styled.div`
  color: var(--Grey-500, #bcc6c6);

  /* Headline 1/semibold */
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%; /* 1.63125rem */
`;

const FooterCopyright = styled.div`
  color: var(--Grey-500, #bcc6c6);
  font-feature-settings: "ss10" on;

  /* Headline 2 */
  font-family: "Pretendard Variable";
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
