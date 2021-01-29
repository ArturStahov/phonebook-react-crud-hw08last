import Container from '../Container';
import { NavLink } from 'react-router-dom';

import UserProfile from '../UserProfile';

import { NavList, NavItem, Nav, Logo } from './StyledComponent';

export default function AppBar() {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavLink exact to="/signup">
            {' '}
            <NavItem>Sign Up</NavItem>
          </NavLink>
          <NavLink exact to="/">
            {' '}
            <NavItem>Sign In</NavItem>
          </NavLink>
        </NavList>
        <Logo>Phonebook</Logo>
        <UserProfile />
      </Nav>
    </Container>
  );
}
