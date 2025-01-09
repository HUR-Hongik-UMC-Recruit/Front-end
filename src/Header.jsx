import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  background: ${(props) => (props.$isApplyPage ? "#FFFFFF" : "#111412")};
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
  width: 100%;
  height: 2.56rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
`;

const HomeWrapper = styled.div``;

const Home = styled.a`
  text-decoration-line: none;
  color: ${(props) => (props.$isApplyPage ? "#1D201E" : "#fff")};
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
  color: ${(props) => (props.$isApplyPage ? "#1D201E" : "#fff")};

  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.54063rem */

  display: inline-block;
  position: relative;

  &:hover::after {
    left: 0%;
    width: 100%;
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    border-bottom: 2px solid;
    border-bottom-color: ${(props) =>
      props.$isApplyPage ? "#1D201E" : "#fff"};
    transition: all 0.3s ease-out;
    left: 50%;
    width: 0;
  }
`;

const MenuButton = styled.button`
  width: 5rem;
  height: 2.25rem;
  background-color: transparent;
  color: #90e6c9;
  cursor: pointer;

  border-radius: 0.3125rem;
  border: 1px solid #90e6c9;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;

  &:hover {
    border: ${(props) => (props.$isApplyPage ? "" : "#2b9176")};
    background: ${(props) => (props.$isApplyPage ? "#B1E9D6" : "#5fbda1")};
    color: #ffffff;
    transform: scale(1.1);
    transition: all ease 0.5s;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const toRecruit = () => {
    // 새로고침 느낌
    window.location.href = "/apply";

    // 스무스하게 넘어감
    navigate("/apply");
  };

  const location = useLocation();
  const isApplyPage = location.pathname === "/apply";

  return (
    <HeaderContainer $isApplyPage={isApplyPage}>
      <HeaderWrapper>
        <HomeWrapper>
          <Home href="/" $isApplyPage={isApplyPage}>
            UMC
          </Home>
        </HomeWrapper>
        <MenuWrapper>
          <MenuListWrapper>
            <MenuList href="" $isApplyPage={isApplyPage}>
              프로젝트
            </MenuList>
            <MenuList href="" $isApplyPage={isApplyPage}>
              운영진
            </MenuList>
          </MenuListWrapper>
          <MenuButton $isApplyPage={isApplyPage} onClick={toRecruit}>
            지원하기
          </MenuButton>
        </MenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
