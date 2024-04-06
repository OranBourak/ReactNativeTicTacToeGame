import React from 'react';
import { Pressable, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

// Define a type for the props
interface CellProps {
  marker: string | null;
  onPress: () => void;
}

const Cell = ({ marker, onPress }: CellProps) => {
  return (
    <Pressable style={styles.cell} onPress={onPress}>
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
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  icon: {
    width: 62,
    height: 62,
  },
});

export default Cell;
