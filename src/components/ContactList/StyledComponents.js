import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const List = styled.div`
  width: 100%;
  max-height: 60vh;
  padding: 10px 0px 10px;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #927cd7;
  }
`;

const useStyles = makeStyles({
  root: {
    width: '80%',
    marginBottom: 20,
  },
});

export { List, useStyles };
