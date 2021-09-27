import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { EditTaskProps } from '../../pages/Home';
import { TaskItem } from '../TaskItem';

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
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
          <View>
            <TaskItem 
              item={item}
              index={index}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
              editTask={editTask}
            />
          </View>
          )
        }}
        style={{
          marginTop: 32,
        }}
      />
  )
}


