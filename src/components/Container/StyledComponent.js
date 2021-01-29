import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;

export { Wrapper };
