import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const AcceptButton = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.acceptBtn}
            onPress={onPress}
        >
            <AntDesign name="checkcircle" size={26} color={'#fff'}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    acceptBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
});

export default AcceptButton;