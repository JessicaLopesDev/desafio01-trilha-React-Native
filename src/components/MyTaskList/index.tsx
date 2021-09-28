import React from 'react';
import { FlatList } from 'react-native';
import { EditTaskProps } from '../../pages/Home';
import { TaskItem } from '../TaskItem';
import * as S from './styles';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface MyTasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({}: EditTaskProps) => void;
}

export function MyTasksList({ 
  tasks, 
  toggleTaskDone, 
  removeTask, 
  editTask 
}: MyTasksListProps) {
  return (
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
          <S.TaskContainer item={item}>
            <TaskItem 
              item={item}
              index={index}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
              editTask={editTask}
            />
          </S.TaskContainer>
          )
        }}
      />
  )
}


