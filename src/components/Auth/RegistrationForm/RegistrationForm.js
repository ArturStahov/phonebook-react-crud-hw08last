import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles } from './StyledComponent';
import * as notification from 'notification/ErrorNotification';
import { signUp } from 'redux/auth/auth-operation';
import Spinner from '../../Spinner';
import { getLoadingAuth } from 'redux/selectors/spinner-selector';

export default function RegistrationForms() {
  const { control, handleSubmit, reset } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingAuth);

  const onSubmit = ({ password, confirmPass, email, firstName, lastName }) => {
    if (password !== confirmPass) {
      notification.errorNotification('Passwords are not the same! Try again!');
      return;
    }

    const registrationObj = {
      name: `${firstName} ${lastName}`,
      password,
      email,
    };
    reset();
    dispatch(signUp(registrationObj));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="text"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="You first name"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="text"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="You last name"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="email"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="E-mail"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="password"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="password"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="confirmPass"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="password"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="confirm password"
            variant="outlined"
            required
          />
        )}
      />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="secondary"
      >
        {isLoading ? <Spinner /> : 'Sign Up'}
      </Button>
    </Form>
  );
}
