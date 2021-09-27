import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.purple};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    padding-bottom: 44px;
    background-color: ${theme.colors.purple};
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const LogoText = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.white};
    
  `}
`;

export const CounterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RegularText = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.white};
  `}
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.white};
    font-weight: bold;
  `}
`;