import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

interface BoardProps {
  markers: (string | null)[];
  onCellPress: (index: number) => void;
}

const Board = ({ markers, onCellPress }: BoardProps) => {
  return (
    <View style={styles.mainContainer}>
      {markers.map((marker, index) => (
        <Cell key={index} marker={marker} position={index} onPress={() => onCellPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 70,
  },
});

export default Board;
