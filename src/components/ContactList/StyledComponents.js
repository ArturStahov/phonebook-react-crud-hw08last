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
  image: {
    height: '150px',
  },
  textName: {
    fontSize: '1.6rem',
    fontWeight: 600,
    color: '#6A48D7	',
  },
  textNumber: {
    fontSize: '1.6rem',
    fontWeight: 400,
    color: '#8B7AC3',
  },
});

export { List, useStyles };
