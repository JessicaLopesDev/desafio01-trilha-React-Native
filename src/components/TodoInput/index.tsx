import React, { useState } from 'react';
import { Platform, StyleSheet} from 'react-native';
import { useTheme } from 'styled-components';
import arrowIcon from '../../assets/icons/Arrow.png';


import * as S from './styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const theme = useTheme();

  function handleAddNewTask() {
    addTask(task);
    setTask('')
  }

  return (
    <S.Container 
      style={[
        Platform.OS === 'ios' ?
        styles.inputIOSShadow : 
        styles.inputAndroidShadow
      ]}
    >
      <S.TextInput 
        placeholder="Adicione uma tarefa"
        placeholderTextColor={theme.colors.light_gray}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <S.VerticalLine></S.VerticalLine>
      <S.Button
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <S.Icon source={arrowIcon}/>
      </S.Button>
    </S.Container>
  )
}

const styles = StyleSheet.create({
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  }
});