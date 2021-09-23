import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';

interface CounterProps {
  taskCounter: number;
}

export function Header({ taskCounter }: CounterProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoTextContainer}>
        <Text>to.do</Text>
        <Text>{`Você tem ${taskCounter} tarefas`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logoTextContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
});
