import React, { useEffect, useRef, useState } from 'react';
import { TextInput} from 'react-native';

import trashIcon from '../../assets/icons/trash.png';
import checkIcon from '../../assets/icons/Check.png';
import XIcon from '../../assets/icons/X.png';
import editIcon from '../../assets/icons/edit.png';
import { Task } from '../MyTaskList';
import { EditTaskProps } from '../../pages/Home';
import { EditionButton } from '../EditionButton';

import * as S from './styles';

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
    <S.Container>
      <S.LeftSide>
        <S.CheckButton 
          item={item}
          activeOpacity={0.7}
          onPress={() => toggleTaskDone(item.id)}
          testID={item.done ? `marker-${index}` : `button-${index}`}
          >
          { item.done && (
            <S.CheckImage source={checkIcon} />
          )}
        </S.CheckButton>

        <S.TaskTitle 
          item={item}
          value={editedTask}
          onChangeText={setEditedTask}
          editable={isEditingTask}
          onSubmitEditing={handleSubmitEditing}
          ref={textInputRef}
        />
      </S.LeftSide>

      <S.RightSide>
        { isEditingTask 
          ? <EditionButton
              onPress={handleCancelEditing}
              image={XIcon}
            />
          : <EditionButton
              onPress={handleStartEditing}
              image={editIcon}
            />
        }
        <S.LineSeparator />
        <S.RemoveButton
          disabled={isEditingTask}
          onPress={() => removeTask(item.id)}
        >
          <S.RemoveImage 
            source={trashIcon} 
            isEditingTask={isEditingTask}
          />
        </S.RemoveButton>
      </S.RightSide>
    </S.Container>
  )
}