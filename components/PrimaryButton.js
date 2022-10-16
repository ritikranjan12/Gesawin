import { StyleSheet,View, Text,Pressable } from 'react-native'
import React,{useState} from 'react'



const PrimaryButton = ({children,onPress}) => {
  return (
      <View style={styles.mainInnerframe}>
    <Pressable
    style={({pressed}) => pressed ? [styles.pressed,styles.mainframe] :styles.mainframe}
    onPress={onPress}
    android_ripple={{color: 'grey' }}
    >
      <Text style={styles.maintext}>{children}</Text>
    </Pressable>
    </View>
  )
}


export default PrimaryButton

const styles = StyleSheet.create({

    mainframe: {
        paddingVertical: 8,
        backgroundColor: "#4e0329",
        paddingHorizontal: 16,
        // Android shadow code
        elevation: 4,
        // IoS shadow code
        shadowColor: 'green',
        shadowOffset: {width:2 ,height:2} ,
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    mainInnerframe:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    maintext: {
        color: 'white',
        fontSize: 14,
        textAlign:'center',
    },
    pressed: {
        opacity: 0.75,
    }

});