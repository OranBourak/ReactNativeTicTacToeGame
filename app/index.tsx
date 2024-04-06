import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Board from '../components/Board';
import GameStatus from '../components/GameStatus';
import ReplayButton from '../components/ReplayButton';

// App component
const App = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [markers, setMarkers] = useState(Array(9).fill(null));
  
  useEffect(() => {
    const winner = calculateWinner();
    if (winner) {
      Alert.alert(
        "Game Over",
        `Player ${winner} won the game!`,
        [
          { text: 'Play Again', onPress: resetMarkers },
          { text: 'Cancel', onPress: () => console.log('Game not restarted') }
        ]
      );
    } else if (markers.every(marker => marker !== null)) {
      Alert.alert(
        "Game Over",
        "The game is a draw!",
        [
          { text: 'Play Again', onPress: resetMarkers },
          { text: 'Cancel', onPress: () => console.log('Game not restarted') }
        ]
      );
    }
  }, [markers]);

  const markPosition = (position:number) => {
    if(markers[position] !== null) return // If already marked, return
    let newMarkers = [...markers]
    newMarkers[position] = activePlayer
    setMarkers(newMarkers)
    setActivePlayer(activePlayer === 'X' ? 'O' : 'X') // Switch player after marking

  }

  const resetMarkers = () => { // Reset the game
    setMarkers([null,null,null,null,null,null,null,null,null])
    setActivePlayer('X')
  }

  const calculateWinner = () => {
    const winningPositions = [
      [0,1,2],[3,4,5],[6,7,8], // Horizontal
      [0,3,6],[1,4,7],[2,5,8], // Vertical
      [0,4,8],[2,4,6] // Diagonal
    ]
    for(let i=0;i<winningPositions.length;i++){
      const [a,b,c] = winningPositions[i]
      if(markers[a] && markers[a] === markers[b] && markers[a] === markers[c]){
        return markers[a]
      }
    }
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GameStatus activePlayer={activePlayer} />
      <Board markers={markers} onCellPress={markPosition} />
      <ReplayButton onPress={resetMarkers} />
    </SafeAreaView>
  );
};

export default App;


