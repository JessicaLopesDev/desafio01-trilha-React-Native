import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    height: 60px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    flex: 1px;
    color: ${theme.colors.black};
    padding-left: 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
`;

export const VerticalLine = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 60px;
    background-color: ${theme.colors.background};
  `}
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  padding: 0 14px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Icon = styled.Image`
`;