import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react'
import ModalView from './ModalView'
import * as Clipboard from 'expo-clipboard';

const TextModal = ({isVisible, setIsVisible, data}) => {
    return (
        <ModalView isVisible={isVisible} setIsVisible={setIsVisible}>

            <ScrollView style={styles.scroll}>
                <Text>{data}</Text>
            </ScrollView>

            <TouchableOpacity
                onPress={() => Clipboard.setStringAsync(data)}
                style={styles.button}>
                <Text>Copy</Text>
            </TouchableOpacity>
        </ModalView>
    )
}

export default TextModal

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#D929EFFF",
        marginTop: 10,
        padding: 3,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        minWidth: '80%'
    }
})