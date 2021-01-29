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
  box-shadow: 2px 0px 15px 2px rgba(0, 0, 0, 0.51);
  border-radius: 1rem;
`;

const FormGroup = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Label = styled.span`
  font-size: 1.4rem;
  color: #9a3535;
  font-weight: 700;
  width: 100%;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding-left: 5px;
  width: 100%;
  height: 28px;
  border: 3px solid #5546d0;
  background-color: #aba6d2;
  padding-left: 10px;
  outline: none;
  caret-color: #ff9200;
  &::placeholder {
    font-size: 1.2rem;
    color: #42424b;
    font-weight: 400;
  }
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: #ff4040;
  font-size: 1.4rem;
  font-weight: 600;
  color: #c09f00;
  border: none;
  cursor: pointer;
`;

export { Button, Input, Label, FormGroup, Form, useStyles };
