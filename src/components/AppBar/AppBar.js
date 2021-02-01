import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserProfile from '../UserProfile';
import Container from '../Container';
import { NavList, NavItem, Nav, Logo } from './StyledComponent';
import { getIsLoggedIn } from 'redux/selectors/authSelector';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Nav>
        {!isLoggedIn && (
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
        )}

        <Logo>Phonebook</Logo>
        {isLoggedIn && <UserProfile />}
      </Nav>
    </Container>
  );
}
