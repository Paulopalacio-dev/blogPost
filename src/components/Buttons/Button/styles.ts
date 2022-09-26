import styled, {css} from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 45%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.MAIN};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 24px 5px;
  ${({ isFocused }) => isFocused && css`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.MAIN};    
  `};
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.MAIN};;
`;