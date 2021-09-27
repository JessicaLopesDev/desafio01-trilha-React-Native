import React from 'react';

import * as S from './styles';
import { ImageSourcePropType } from 'react-native';

interface EditionButtonProps {
  onPress: () => void;
  image: ImageSourcePropType;
}

export function EditionButton({
  onPress,
  image
}: EditionButtonProps){
  return (
    <S.Container onPress={onPress}>
      <S.EditionImage source={image} />
    </S.Container>
  )
}