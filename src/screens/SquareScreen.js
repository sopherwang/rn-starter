import React, {useState} from 'react';
import {Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                if (red + change > 255 || red + change < 0) {
                    return
                }
                setRed(red + change)
                return;
            case 'green':
                if (green + change > 255 || green + change < 0) {
                    return
                }
                setGreen(green + change)
                return;
            case 'blue':
                if (blue + change > 255 || blue + change < 0) {
                    return
                }
                setBlue(blue + change)
                return;
        }
    }

    return (
        <View>
            <ColorCounter onDecrease={() => setColor('red', -10)} onIncrease={() => setColor('red', 10)} color='Red'/>
            <ColorCounter onDecrease={() => setColor('blue', -10)} onIncrease={() => setColor('blue', 10)}
                          color='Blue'/>
            <ColorCounter onDecrease={() => setColor('green', -10)} onIncrease={() => setColor('green', 10)}
                          color='Green'/>
            <View
                style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
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