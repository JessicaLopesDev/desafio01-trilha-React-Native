import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
    height: 200,
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0, 20;
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
    font-size: 14;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.regular};
  `}
`;