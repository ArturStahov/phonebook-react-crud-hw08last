import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '80%',
    marginBottom: 15,
    height: '40px',
  },
  input: {
    fontSize: '1.6rem',
    color: '#1A1B1C',
    height: '40px',
  },

  buttonSubmit: {
    height: '40px',
    width: '80%',
    fontSize: '1.7rem',
  },
}));

const Form = styled.form`
  padding: 40px 10px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 2px 0px 15px 2px rgba(0, 0, 0, 0.51);
`;

export { Form, useStyles };
