import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 381px;
  width: 800px;
  margin: 0 auto;
  justify-content: center;
`;
const Title = styled.h2`
  /* align-self:center; */
  padding-top: 70px;
  width: 250px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: #00bcd4;
  margin-right: 110px;
`;
const SelectElem = styled.span`
  display: block;
  width: 300px;
  font-family: 'Londrina Solid', cursive;
  color: #1a237e;
  font-weight: 400;
  font-size: 4rem;
`;
export { Wrapper, Title, SelectElem };
