import { styled } from "styled-components";
import insta from "./assets/icons/Instagram.svg";
import kakao from "./assets/icons/KakaoTalk.svg";

const FooterContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 10.0625rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  padding: 2.875rem 7.31rem 2.875rem 10.625rem;
  justify-content: space-between;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
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

const FooterItemWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterItem = styled.img`
  width: 2.75rem;
  height: 3.75rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTextWrapper>
          <FooterUMC>UMC</FooterUMC>
          <FooterCopyright>
            Copyright ⓒ 2024 UMC. All Rights Reserved
          </FooterCopyright>
        </FooterTextWrapper>
        <FooterItemWrapper>
          <a href="https://pf.kakao.com/_NHYxoG">
            <FooterItem src={kakao} />
          </a>
          <a href="https://www.instagram.com/hongik_makeus_challenge">
            <FooterItem src={insta} />
          </a>
        </FooterItemWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
