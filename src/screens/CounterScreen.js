import React, {useState} from 'react';
import {Text, StyleSheet, Button, View} from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Button title={'Increase'} onPress={() => {
                setCounter(counter + 1)
            }}/>
            <Button title={'Decrease'} onPress={() => {
                setCounter(counter - 1)
            }}/>
            <Text style={styles.textStyle}>Current count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default CounterScreen;