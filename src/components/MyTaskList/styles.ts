import styled, { css } from 'styled-components/native';

export const TaskContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 24px 8px 28px;
    margin-top: 32px;
    background-color: ${theme.colors.light_gray};
  `}
`;
