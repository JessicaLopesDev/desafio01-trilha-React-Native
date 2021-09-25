import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import trashIcon from '../assets/icons/trash.png';
import checkIcon from '../assets/icons/Check.png';
import XIcon from '../assets/icons/X.png';
import editIcon from '../assets/icons/edit.png';
import { Task } from '../components/MyTaskList';
import { EditTaskProps } from '../pages/Home';

interface TaskItemProps {
  item: Task;
  index: number;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({}: EditTaskProps) => void;
}

export function TaskItem({
  item,
  index,
  toggleTaskDone,
  removeTask, 
  editTask
} : TaskItemProps){

  const [isEditingTask, setIsEditingTask] = useState(false);
  const [editedTask, setEditedTask] = useState(item.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEditingTask(true);
  }

  function handleCancelEditing() {
    setEditedTask(item.title);
    setIsEditingTask(false);
  }

  function handleSubmitEditing() {
    const newEdition: EditTaskProps = {
      taskId: item.id,
      taskNewTitle: editedTask
    }
    editTask(newEdition)

    setIsEditingTask(false);
  }

  useEffect(() => {
    if(textInputRef.current) {
      if(!!isEditingTask) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  },[isEditingTask])


  return (
    <View style={styles.itemContainer}>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={0.7}
          onPress={() => toggleTaskDone(item.id)}
          style={styles.taskButton}
        >
          <View 
            testID={`marker-${index}`}
            style={item.done ? styles.taskMarkerDone : styles.taskMarker}
          >
            { item.done && (
              <Image source={checkIcon} />
            )}
          </View>

          <TextInput 
            value={editedTask}
            onChangeText={setEditedTask}
            editable={isEditingTask}
            onSubmitEditing={handleSubmitEditing}
            style={item.done ? styles.taskTextDone : styles.taskText}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        { 
          isEditingTask ? 
            <TouchableOpacity
              onPress={handleCancelEditing}
            >
              <Image source={XIcon} />
            </TouchableOpacity> 

            :

            <TouchableOpacity
              onPress={handleStartEditing}
            >
              <Image source={editIcon} />
            </TouchableOpacity>
        }
        <View
          style={{width: 1, height: 24, backgroundColor: 'rgba(196, 196, 196, 0.24)', marginHorizontal: 18}}
        >
        </View>
        <TouchableOpacity
          disabled={isEditingTask}
          onPress={() => removeTask(item.id)}
        >
          <Image 
            source={trashIcon} 
            style={{ opacity: isEditingTask ? 0.2 : 1 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
    fontFamily: 'Inter-Medium'
  },
  taskMarkerDone: {
    height: 20,
    width: 20,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Medium'
  }
})
