import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Task } from '../MyTaskList';

interface RemoveImageProps {
  isEditingTask: boolean;
}

export interface TaskProps {
  item: Task;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckButton = styled.TouchableOpacity<TaskProps>`
  ${({ theme, item }) => item.done ? 
  css`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${theme.colors.green};
    margin-right: 15px;
    justify-content: center;
  ` : 
  css`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border-width: 1px;
    border-color: ${theme.colors.medium_gray};
    margin-right: 15px;
    justify-content: center;
  `}
`;

export const CheckImage = styled.Image`
`;

export const TaskTitle = styled(TextInput)<TaskProps>`
  ${({ theme, item }) => item.done ? 
  css`
    text-decoration: line-through;
    color: ${theme.colors.green};
  ` : 
  css`
    color: ${theme.colors.dark_gray};
  `}
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LineSeparator = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 24px;
    background-color: ${theme.colors.light_gray};
    margin: 0 14px;
  `}
`;

export const RemoveButton = styled.TouchableOpacity`
`;

export const RemoveImage = styled.Image<RemoveImageProps>`
  opacity: ${
    ({ isEditingTask }) => isEditingTask ? 0.1 : 1 
  };
`;



