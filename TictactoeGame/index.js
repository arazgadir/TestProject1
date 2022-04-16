import React, { useState } from 'react';
import { View, Text, Pressable, Button, Alert } from 'react-native'
import checkWinner from './checkWinner'
import styles from './styles'

export const TictactoeGame = () => {

  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [table, setTable] = useState(Array(9).fill(null))
  const [highLighted, setHighlighted] = useState([])
  const [winner, setWinner] = useState(null)

  const handlePress = (index) => {
    const newTable = [...table]
    newTable[index] = currentPlayer
    setTable(newTable)
    const winnerLine = checkWinner(newTable)
    if (winnerLine) {
      setHighlighted(winnerLine)
      setWinner(currentPlayer)
      Alert.alert('Conguratilations',`${currentPlayer} won!`)
    } else {
      setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X')
    }
  }

  const reset = () => {
    setCurrentPlayer('X')
    setTable(Array(9).fill(null))
    setHighlighted([])
    setWinner(null)
  }

  const Cell = ({ value, onPress, disabled, highLighted }) => {
    return (
      <Pressable disabled={disabled} onPress={onPress} style={{ ...styles.box, backgroundColor: highLighted ? 'green' : 'white' }}>
        <Text style={styles.boxText}> {value} </Text>
      </Pressable>
    )
  }

  const getCell = (index) => (
    <Cell
      value={table[index]}
      onPress={() => handlePress(index)}
      highLighted={highLighted.includes(index)}
      disabled={winner || table[index]} />
  )

  return (
    <View style={styles.container}>
      <Text style = {styles.headerText}>
        TIC TAC TOE
      </Text>
      <View style={styles.lineBoxes}>
        {getCell(0)}
        {getCell(1)}
        {getCell(2)}
      </View>
      <View style={styles.lineBoxes}>
        {getCell(3)}
        {getCell(4)}
        {getCell(5)}
      </View>
      <View style={styles.lineBoxes}>
        {getCell(6)}
        {getCell(7)}
        {getCell(8)}
      </View>
      <View style={styles.newGame}>
        <Button title='New Game' onPress={reset}/>
      </View>
    </View>
  )
};    

export default TictactoeGame