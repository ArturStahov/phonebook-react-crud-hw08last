import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selectors/authSelector';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isShouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {isShouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
