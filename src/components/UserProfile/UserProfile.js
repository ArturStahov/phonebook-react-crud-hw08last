import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Text } from './StyledComponents';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logOut } from 'redux/auth/auth-operation';
import { getUser } from 'redux/selectors/authSelector';

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handlerLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Text>e-mail: {user && user.email}</Text>

      <IconButton aria-label="delete" onClick={handlerLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x" color="#ffffff" />
      </IconButton>
    </Wrapper>
  );
}
