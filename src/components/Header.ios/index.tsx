import React from 'react';
import * as S from './styles';

interface CounterProps {
  taskCounter: number;
}

export function Header({ taskCounter }: CounterProps) {
  return (
    <S.Container>
      <S.Header>
        <S.LogoText >to.do</S.LogoText>
        <S.CounterContainer>
          <S.RegularText >Você tem</S.RegularText>
          <S.BoldText >{` ${taskCounter} tarefas`}</S.BoldText>
        </S.CounterContainer>
      </S.Header>
    </S.Container>
  )
}

