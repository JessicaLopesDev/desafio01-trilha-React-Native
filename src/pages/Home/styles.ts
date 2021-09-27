import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 0 24px;
  position: absolute;
  margin-top: -25px;
`;

