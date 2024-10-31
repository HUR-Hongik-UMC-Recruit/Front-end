import { styled } from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  height: 5rem;
  padding: 0rem 10.3125rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 65.375rem;
  justify-content: space-between;
  align-items: center;
`;

const HomeWrapper = styled.div``;

const Home = styled.a`
  text-decoration-line: none;
  color: inherit;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const MenuList = styled.a`
  text-decoration-line: none;
  color: inherit;

  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.54063rem */
`;

const MenuButton = styled.button`
  border-radius: 0.3125rem;
  border: 1px solid #90e6c9;

  background-color: transparent;
  color: #90e6c9;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <MenuWrapper>
          <HomeWrapper>
            <Home href="/">UMC</Home>
          </HomeWrapper>
          <MenuListWrapper>
            <MenuList href="">프로젝트</MenuList>
            <MenuList href="">운영진</MenuList>
            <MenuList href="">FAQ</MenuList>
            <MenuButton>지원하기</MenuButton>
          </MenuListWrapper>
        </MenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
