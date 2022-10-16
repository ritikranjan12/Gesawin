import { StyleSheet, View, Text, Image,Platform } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const GameOver = ({ count, guess, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.screen}>
        <Text style={styles.title}>GAME OVER!</Text>
        <View style={styles.ImageView}>
          <Image style={styles.ImageStyle} source={{ uri: "https://media.istockphoto.com/photos/glitch-stile-game-over-advertisement-banner-on-glitched-black-picture-id894592700?b=1&k=20&m=894592700&s=170667a&w=0&h=XsZqjr0z_hci3U8e88DHge-dl1hzvfI1g1BuzVesH78=" }} />
        </View>
        <Text style={styles.summarytext}>
          Your Device Needed <Text style={styles.highligts}>{count}</Text> Rounds to Guess the Number <Text style={styles.highligts}>{guess}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  )
}

export default GameOver
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#640233',
    opacity: 0.80,
  },
  screen: {
    flex: 1,
    margin: 10,
  },
  title: {
    textAlign: 'center',
    borderWidth: Platform.select({ios: 0, android:2}),
    borderColor: 'red',
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  ImageView: {
    width: 300,
    height: 150,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'green',
    overflow: 'hidden',
    margin: 34,
  },
  ImageStyle: {
    width: "100%",
    height: "100%",
  },
  summarytext: {
    color: "white",
    fontSize: 32,
    marginTop: 32,
    marginLeft: 24,
    marginRight: 12,
    marginBottom: 12,
  },
  highligts: {
    fontStyle: 'italic',
    color: "teal"
  }
})