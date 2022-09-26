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
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  ${({ isFocused }) => isFocused && css`
    border: 5px;
    border: ${({ theme }) => theme.COLORS.MAIN};    
  `};
`

export const InputText = styled.TextInput.attrs<Props>({
  placeholderTextColor: "#D8D8D8"
})`
  width:90%;
  outline-color: transparent;
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND};
 `