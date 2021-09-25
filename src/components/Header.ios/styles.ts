import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.purple};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    padding-bottom: 44;
    background-color: ${theme.colors.purple};
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const LogoText = styled.Text`
  ${({ theme }) => css`
    font-size: 24;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
  `}
`;

export const CounterText = styled.Text`
  ${({ theme }) => css`
    font-size: 24;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.medium};
  `}
`;