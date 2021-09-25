import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './styles';

interface CounterProps {
  taskCounter: number;
}

export function Header({ taskCounter }: CounterProps) {
  return (
    <S.Container style={{ paddingTop: StatusBar.currentHeight }} >
      <S.Header>
        <S.LogoText >to.do</S.LogoText>
        <S.CounterText>{`Você tem ${taskCounter} tarefas`}</S.CounterText>
      </S.Header>
    </S.Container>
  )
}

