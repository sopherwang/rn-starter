import React from 'react';
import {Text, Button, StyleSheet, View} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease}/>
            <Button title={`Decrease ${color}`} onPress={onDecrease}/>
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

export default ColorCounter;