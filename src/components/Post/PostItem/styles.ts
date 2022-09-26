import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height:100px;
  margin-top: 24px;
  padding-horizontal:16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const Header = styled.View`
  width: 100%;
  padding-vertical: 12px;
  flex-direction: row;
  justify-content:space-between;
`
export const Title = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: 18px;
`
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  padding-bottom: 16px;
`
