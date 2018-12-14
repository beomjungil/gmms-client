import styled from '../../../styled-components';

const EmptyButton = styled.button`
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: 0;
  }
`;

export default EmptyButton;
