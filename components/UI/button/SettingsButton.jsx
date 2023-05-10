import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons";

const SettingsButton = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.settingsBtn}
            onPress={onPress}
        >
            <Entypo name="dots-three-vertical" size={26} color={'#fff'}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    settingsBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
});

export default SettingsButton;