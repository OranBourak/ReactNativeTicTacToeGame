import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

interface GameStatusProps {
  activePlayer: string;
}

const GameStatus = ({ activePlayer }: GameStatusProps) => {
  return (
    <View style={[styles.playerInfo, { backgroundColor: activePlayer === 'X' ? "#007FF4" : "#F40074" }]}>
      <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: StatusBar.currentHeight,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: 'white',
  },
});

export default GameStatus;
