import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../../components/Header';
import { MyTasksList } from '../../components/MyTaskList';
import { TodoInput } from '../../components/TodoInput';
import * as S from './styles';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface EditTaskProps {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const findTask = tasks.find(item => newTaskTitle === item.title);

    if(!!findTask) {
      Alert.alert(
        'Task já cadastrada', 
        'Você não pode cadastrar uma task com o mesmo nome'
      );
      return;
    }

    if (newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      };
      return setTasks([...tasks, data]);
    }
    return Alert.alert('Favor adicionar uma tarefa!');
  }

  function handleMarkTaskAsDone(id: number) {
    const newArray = tasks.map(item => {
      if(item.id === id) {
        item.done = !item.done;
      }
      return item;
    })
    setTasks(newArray);
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      'Remover item', 
      'Tem certeza que você deseja remover esse item?', 
      [
        {text: 'Não' },
        {
          text: 'Sim',
          onPress: () => {
            const deleteItem = tasks.filter(item => {
              return item.id !== id 
            });
            setTasks(deleteItem);
          }
        }
      ], 
      {
        cancelable: true
      } 
    );
  }

  function handleEditTask({ taskId, taskNewTitle }: EditTaskProps) {
    
    const newArray = tasks.map(item => {
      if(item.id === taskId) {
        item.title = taskNewTitle;
      }
      return item;
    })
    setTasks(newArray);
  }

  return (
    <>
      <Header taskCounter= {tasks.length}/>
      <S.Container>
        <S.InputContainer>
          <TodoInput addTask={handleAddTask} />
        </S.InputContainer>
        <S.TaskListContainer>
          <MyTasksList 
            tasks={tasks} 
            toggleTaskDone={handleMarkTaskAsDone} 
            removeTask={handleRemoveTask} 
            editTask={() => handleEditTask}
          />
        </S.TaskListContainer>
      </S.Container>
    </>
  )
}