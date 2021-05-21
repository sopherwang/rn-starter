import React, {useReducer} from 'react';
import {Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount}
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
            return state
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <ColorCounter onDecrease={() => dispatch({colorToChange: 'red', amount: -15})}
                          onIncrease={() => dispatch({colorToChange: 'red', amount: 15})} color='Red'/>
            <ColorCounter onDecrease={() => dispatch({colorToChange: 'blue', amount: -15})}
                          onIncrease={() => dispatch({colorToChange: 'blue', amount: 15})}
                          color='Blue'/>
            <ColorCounter onDecrease={() => dispatch({colorToChange: 'green', amount: -15})}
                          onIncrease={() => dispatch({colorToChange: 'green', amount: 15})}
                          color='Green'/>
            <View
                style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}
            />
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

export default SquareScreen;