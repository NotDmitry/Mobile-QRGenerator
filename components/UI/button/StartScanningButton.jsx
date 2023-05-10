import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const StartScanningButton = ({isScanning, setIsScanning}) => {

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => setIsScanning(!isScanning)}
        >
            <Text style={styles.text}>
                {isScanning ? 'Stop' : 'Scan'}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 8,
        width: '50%',
        elevation: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d929ef',
        position: "absolute",
        right: 100,
        bottom: 30,
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
})

export default StartScanningButton

