import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 0px 40px;
  width: 100%;
  background-color: #bdbdbd;
`;
const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 1.4rem;
  color: #000000;
  margin-right: 10px;
`;
const ContactsBlock = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-self: baseline;
`;
const ContactLink = styled.a`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export { Wrapper, Title, ContactsBlock, Text, ContactLink };
