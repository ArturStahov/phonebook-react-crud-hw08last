import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0px 70px;
  display: flex;
  align-items: flex-start;
`;
const ContentBlock = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
`;
const Info = styled.h2`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  color: #706a80;
`;

export { Wrapper, ContentBlock, Info };
