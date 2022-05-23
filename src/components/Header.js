import styled from "styled-components";

const Sheader = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  box-sizing: border-box;
`;

const Logo = styled.div``;

const MenuWrap = styled.ul`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.li``;

export const Header = () => {
  return (
    <Sheader>
      <Logo>Logo</Logo>
      <MenuWrap>
        <Menu>menu1</Menu>
        <Menu>menu2</Menu>
        <Menu>menu3</Menu>
        <Menu>menu4</Menu>
      </MenuWrap>
    </Sheader>
  );
};
