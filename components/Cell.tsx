import React from 'react';
import { Pressable, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

// Define a type for the props
interface CellProps {
  marker: string | null;
  onPress: () => void;
  position: number;
}

const Cell = ({ marker, onPress, position }: CellProps) => {
  const isRightCell = (position % 3) === 2;
  const isBottomCell = position >= 6;

  const cellStyle = {
    ...styles.cell,
    borderRightWidth: isRightCell ? 0 : 6,
    borderBottomWidth: isBottomCell ? 0 : 6,
    borderTopWidth: position < 3 ? 0 : 6,
    borderLeftWidth: (position % 3) === 0 ? 0 : 6,
  };

  return (
    <Pressable style={cellStyle} onPress={onPress}>
      {marker === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
      {marker === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 62,
    height: 62,
  },
});

export default Cell;
