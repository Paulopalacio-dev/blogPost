import styled from 'styled-components/native';


export const Button = styled.View`
  position: fixed;
  right: 20px;
  bottom: 40px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  color:${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  &:hover {border: 3px solid ${({ theme }) => theme.COLORS.MAIN}};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
