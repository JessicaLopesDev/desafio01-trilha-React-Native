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
  margin-top: -32px;
`;

export const TaskListContainer = styled.View`
  margin-top: 32px;
`;

