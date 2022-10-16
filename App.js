import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react"
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import {StatusBar} from 'expo-status-bar'

export default function App() {
  const [state, setstate] = useState(null)
  const [first, setFirst] = useState(true)
  const [cnt,setCnt] = useState(null)
  function pickedNumber(pickNumber) {
    setstate(pickNumber)
    setFirst(false)
  }
  function endgame(count) {
    setCnt(count)
    setFirst(true)
  }
  function startNewGame() {
    setstate(null)
    setCnt(null)
  }
  let screen = <StartGame onPress={pickedNumber} />;

  if (state) {
    screen = <GameScreen enteredNumber={state} onGameEnd={endgame}/>;
  }
  if (state && first) {
    screen = <GameOver count = {cnt} guess={state} onStartNewGame={startNewGame} />;
  }
  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={["red", "yellow", "orange","blue"]} style={styles.mainView} >
      <ImageBackground style={styles.mainView}
        source={require("./assets/top.gif")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}



const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.75,
  }
});