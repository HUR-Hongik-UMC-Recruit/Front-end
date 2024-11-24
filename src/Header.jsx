import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.div`
  background: #111412;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 65.375rem;
  height: 2.56rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeWrapper = styled.div``;

const Home = styled.a`
  text-decoration-line: none;
  color: #fff;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 2.56rem;
`;

const MenuListWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const MenuList = styled.a`
  text-decoration-line: none;
  color: #fff;

  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.54063rem */
`;

const MenuButton = styled.button`
  width: 5rem;
  height: 2.25rem;

  border-radius: 0.3125rem;
  border: 1px solid #90e6c9;

  background-color: transparent;
  color: #90e6c9;
  cursor: pointer;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;
`;

const Header = () => {
  const navigate = useNavigate();

  const toRecruit = () => {
    // 새로고침 느낌
    // window.location.href = "/recruitment";

    // 스무스하게 넘어감
    navigate("/recruitment");
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HomeWrapper>
          <Home href="/">UMC</Home>
        </HomeWrapper>
        <MenuWrapper>
          <MenuListWrapper>
            <MenuList href="">프로젝트</MenuList>
            <MenuList href="">운영진</MenuList>
            <MenuList href="">FAQ</MenuList>
          </MenuListWrapper>
          <MenuButton onClick={toRecruit}>지원하기</MenuButton>
        </MenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
