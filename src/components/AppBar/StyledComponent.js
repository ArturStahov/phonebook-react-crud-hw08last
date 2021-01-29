import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavList = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
`;
const NavItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 100px;
  height: 40px;
  font-family: 'Londrina Solid', cursive;
  font-size: 1.6rem;
  color: #ffffff;
  transition: 0.3s ease-in;
  transition-property: transform box-shadow;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    transform: scaleX(0.8);
    box-shadow: inset 2px 0px 15px 2px #ffffff;
  }
`;
const Logo = styled.h2`
  width: 250px;
  font-size: 3rem;
  font-family: 'Londrina Solid', cursive;
  color: transparent;
  letter-spacing: 2px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
`;

export { NavList, NavItem, Nav, Logo };
