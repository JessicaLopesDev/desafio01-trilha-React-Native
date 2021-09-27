import React from 'react';
import { StatusBar } from 'react-native';
import logo from '../../assets/icons/logo.png';
import * as S from './styles';

interface CounterProps {
  taskCounter: number;
}

export function Header({ taskCounter }: CounterProps) {
  return (
    <S.Container style={{ paddingTop: StatusBar.currentHeight }} >
      <S.Header>
        <S.Logo source={logo} />
        <S.CounterContainer>
          <S.RegularText >Você tem</S.RegularText>
          <S.BoldText >{` ${taskCounter} tarefas`}</S.BoldText>
        </S.CounterContainer>
      </S.Header>
    </S.Container>
  )
}

