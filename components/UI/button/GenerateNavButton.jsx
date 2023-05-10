import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {AntDesign} from '@expo/vector-icons';

const GenerateNavButton = ({onPress}) => {

    return (
        <TouchableOpacity
            style={styles.addBtn}
            onPress={onPress}
            activeOpacity={0.5}
        >
            <AntDesign name="plus" size={36} color='#fff'/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addBtn: {
        shadowColor: '#000',
        elevation: 3,
        backgroundColor: '#c134de',
        borderRadius: 20,
        flex: 1,
        padding: 10,
        position: "absolute",
        right: 30,
        bottom: 30,
    },
});

export default GenerateNavButton;