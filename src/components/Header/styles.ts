import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
    height: 170px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const Header = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Logo = styled.Image`
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