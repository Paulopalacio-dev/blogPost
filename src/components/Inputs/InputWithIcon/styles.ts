import { TextInput } from 'react-native';
import styled, {css} from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  flex-direction: row;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 40px;
  margin-top: 60px;
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  ${({ isFocused }) => isFocused && css`
    border: 5px;
    border: ${({ theme }) => theme.COLORS.MAIN};    
  `};
`

export const InputText = styled(TextInput) <Props>`
  width: 100%;
  margin-left:5px;
  padding: 0 10px;
  outline-color: transparent;
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND};
 `

export const Button = styled.View`
padding: 10px;
`