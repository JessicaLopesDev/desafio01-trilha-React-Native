import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const LeftSide = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const CheckButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    
  `}
`;

export const CheckImage = styled.Image`
  ${({ theme }) => css`
    
  `}
`;

export const TaskTitle = styled(TextInput)`
  ${({ theme }) => css`
    
  `}
`;

export const RightSide = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const LineSeparator = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 24px;
    background-color: ${theme.colors.light_gray};
  `}
`;



