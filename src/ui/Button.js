import styled from 'styled-components';

const StyledButton = styled.button`
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

   &:hover {
    background: darkblue; 
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
