import React, {useReducer} from 'react';
import {Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return {...state, red: state.red + action.payload}
        case 'change_green':
            return {...state, green: state.green + action.payload}
        case 'change_blue':
            return {...state, blue: state.blue + action.payload}
        default:
            return state
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <ColorCounter onDecrease={() => dispatch({type: 'change_red', payload: -15})}
                          onIncrease={() => dispatch({type: 'change_red', payload: 15})}
                          color='Red'/>
            <ColorCounter onDecrease={() => dispatch({type: 'change_blue', payload: -15})}
                          onIncrease={() => dispatch({type: 'change_blue', payload: 15})}
                          color='Blue'/>
            <ColorCounter onDecrease={() => dispatch({type: 'change_green', payload: -15})}
                          onIncrease={() => dispatch({type: 'change_green', payload: 15})}
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