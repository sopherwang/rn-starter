import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail imageSource={require('../../assets/forest.jpg')} title="Forest"/>
            <ImageDetail imageSource={require('../../assets/beach.jpg')} title="Beach"/>
            <ImageDetail imageSource={require('../../assets/mountain.jpg')} title="Mountain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
})

export default ImageScreen;