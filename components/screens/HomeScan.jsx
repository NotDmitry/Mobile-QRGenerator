import React, {useEffect, useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import StartScanningButton from "../UI/button/StartScanningButton";
import {BarCodeScanner} from "expo-barcode-scanner";
import GenerateNavButton from "../UI/button/GenerateNavButton";
import ModalText from "../UI/modal/ModalText";
import {Linking, StyleSheet, Text} from "react-native";

const HomeScan = (props) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [data, setData] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setIsScanning(false);
        });
        return () => {
            navigation.removeListener('focus', unsubscribe);
        }
    }, [navigation]);

    const onCodeScanned = (scanData) => {
        setData(scanData.data);
        setModalVisible(true);
        setIsScanning(false);

        if (scanData.data.toLowerCase().startsWith('http') || scanData.data.toLowerCase().startsWith('https')) {
            Linking.openURL(scanData.data);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {!hasPermission
                ? <Text>Permission</Text>
                : isScanning && <BarCodeScanner
                style={styles.full}
                onBarCodeScanned={onCodeScanned} />}
            <StartScanningButton isScanning={isScanning} setIsScanning={setIsScanning}/>
            <GenerateNavButton onPress={() => navigation.navigate('GenerateCode')}/>
            <ModalText isVisible={modalVisible} setIsVisible={setModalVisible} data={data}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    full: {
        height: '70%',
        width: '100%',
    },
});

export default HomeScan;