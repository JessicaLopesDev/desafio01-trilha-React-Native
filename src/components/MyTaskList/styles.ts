import styled, { css } from 'styled-components/native';
import { TaskProps } from '../TaskItem/styles';

export const TaskContainer = styled.View<TaskProps>`
  width: 100%;
  padding: 5px 24px;
  ${({ theme, item }) => css`
    background-color: ${ 
      item.done ? theme.colors.background 
      : 'rgba(196,196,196,0.25)' 
    };
  `}
`;
