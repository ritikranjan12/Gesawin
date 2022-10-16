import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Guess from '../components/Guess';
import PrimaryButton from '../components/PrimaryButton';
import {Ionicons} from '@expo/vector-icons'

function generateRandomNumbers(min, max, exclude) {
  const RndNum = Math.floor(Math.random() * (max - min)) + min;
  if (RndNum == exclude) {
    return generateRandomNumbers(min, max, exclude)
  } else return RndNum;
}
let minBoundary = 1;
let maxBoundary = 999;
const GameScreen = ({ enteredNumber, onGameEnd }) => {

  const initialguess = generateRandomNumbers(1, 999, enteredNumber)
  const [currGuess, setCueGuess] = useState(initialguess)
  const [count, setCount] = useState(0);

  function nextGuessHandler(direction) {

    if ((direction === 'lower' && currGuess < enteredNumber) || (direction === 'greater' && currGuess > enteredNumber)) {
      setCount(count + 1);
      Alert.alert("Don't Lie!", 'You know that this is Wrong...', [{ text: 'Sorry', style: 'cancel' }])
    }
    else if (direction === 'lower') {
      setCount(count + 1);
      maxBoundary = currGuess - 1;
      const newRandNumber = generateRandomNumbers(minBoundary, maxBoundary, currGuess)
      setCueGuess(newRandNumber)
    } else {
      setCount(count + 1);
      minBoundary = currGuess + 1;
      const newRandNumber = generateRandomNumbers(minBoundary, maxBoundary, currGuess)
      setCueGuess(newRandNumber)
    }

  }
  useEffect(() => {
    if (currGuess === enteredNumber) {
      onGameEnd(count)
    }
  }, [currGuess, enteredNumber, onGameEnd])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 1000;
  }, [])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <Guess number={currGuess} />
      <View>
        <View style={styles.mainView}>
          <Text style={styles.headingText}>Higher or Lower?</Text>

          <View style={styles.buttonBox}>
            <View style={styles.buttonText}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.buttonText}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    margin: 10,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    borderWidth: 3,
    borderColor: 'orange',
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    maxWidth: '80%'
    
  },
  mainView: {
    opacity: 0.80,
    backgroundColor: '#72063c',
    marginTop: 310,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
    // Android shadow code
    elevation: 4,
    // IoS shadow code
    shadowColor: 'green',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
},
headingText: {
    color: 'skyblue',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic'
},
buttonBox: {
   flexDirection: 'row',
   marginTop: 4,
},
buttonText: {
    flex:1,
}
});