import styled from 'styled-components';

const FilterBlock = styled.div`
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding-bottom: 20px;
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid grey;
  border-radius: 1rem;
  padding-left: 10px;
  font-size: 1.4rem;

  outline: none;
  margin-right: 10px;
  caret-color: #ff9200;
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    border-color: #6239e5;
  }
`;

export { FilterBlock, Label, Title, Input };
