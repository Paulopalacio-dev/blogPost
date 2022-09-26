import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ModalView = styled.View`
  margin: 0 32px;
  width: 80%;
  height: 350px;
  padding: 24px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  font-weight: bold;
  padding-left: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`
export const  Header = styled.View`
width: 100%;
height:40px;
flex-direction: row;
`
export const  View = styled.View`
align-items:center;
flex-direction: row;
`
export const ModalButton = styled.Text`
  margin: 10px 0 10px 10px;
  justify-content: space-between;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`
export const TextInput = styled.TextInput`
   width: 100%;
  margin-left:5px;
  padding: 0 10px;
  outline-color: transparent;
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND};
`