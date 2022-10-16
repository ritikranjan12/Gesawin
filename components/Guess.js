import { StyleSheet,View, Text, Dimensions } from 'react-native'
import React from 'react'

const Guess = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{number}</Text>
    </View>
  )
}

export default Guess

const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').fontScale;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        backgroundColor:'orange',
        borderColor: '#72063c',
        padding: devicewidth < 300 ? 12 : 24,
        borderRadius: 8,
        margin: devicewidth < 300 ? 12 : 24,
        alignItems:"center",
        justifyContent:'center',
    },
    numbertext:{
        color:'green',
        fontSize: devicewidth < 300 ? 28 : 36,
        fontWeight: 'bold',

    }
})