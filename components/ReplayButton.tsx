import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

interface ReplayButtonProps {
  onPress: () => void;
}

const ReplayButton = ({ onPress }: ReplayButtonProps) => {
  return (
    <Pressable style={styles.replayBTN} onPress={onPress}>
      <Image source={require('../assets/images/replay.png')} style={styles.replayIcon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  replayBTN: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  replayIcon: {
    width: 80,
    height: 80,
  },
});

export default ReplayButton;
