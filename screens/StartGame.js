import { StyleSheet, View, Text, TextInput, Image, Alert } from 'react-native'
import React , {useState}
from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { Dimensions } from 'react-native';

const StartGame = ({onPress}) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    function handleInput(enteredtext){
        setEnteredNumber(enteredtext);
    }

   function eraseInput(){
    setEnteredNumber('')
   }

    function confirmInput(){
        const chooseNumber = parseInt(enteredNumber);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 999) {
            Alert.alert('Invalid Number','Number has to be between 1 and 999',
            [{text: 'Okay', style:'destructive',onPress:eraseInput()}]);
        } else {
            onPress(chooseNumber);
        }

    }
    
    return (

        <View style={styles.rootContainer}>
            <Text style={styles.title}>Guess My Number</Text>
            <View style={styles.mainView}>
                <Text style={styles.headingText}>Enter a Number</Text>
                <TextInput value={enteredNumber} onChangeText={handleInput} style={styles.inputElement} maxLength={3}
                    keyboardType={'number-pad'}
                // autoCapitalize='none'
                // autoCorrect={false}
                />
                <View style={styles.buttonBox}>
                    <View style={styles.buttonText}>
                    <PrimaryButton onPress={eraseInput} >Reset</PrimaryButton>

                    </View>
                    <View style={styles.buttonText}>

                    <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}
const deviceheight = Dimensions.get('window').height

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop: deviceheight < 300 ? 30 : 100,
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
      },
    mainView: {
        backgroundColor: '#72063c',
        marginTop: 36,
        marginHorizontal: 24,
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
    inputElement: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 28,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    buttonBox: {
       flexDirection: 'row',
       marginTop: 4,
    },
    buttonText: {
        flex:1,
    }

});

export default StartGame