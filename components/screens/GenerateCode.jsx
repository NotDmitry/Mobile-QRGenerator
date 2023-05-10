import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import AcceptButton from "../UI/button/AcceptButton";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, TextInput} from "react-native";
import ModalCode from "../UI/modal/ModalCode";

const GenerateCode = (props) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AcceptButton onPress={() => setModalVisible(true)}/>
            ),
        });
    }, [text]);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.description}
                placeholder={'Add content'}
                onChangeText={(text) => setText(text)}
                multiline={true}
            />
            <ModalCode isVisible={modalVisible} setIsVisible={setModalVisible} data={text}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 18,
    },
});

export default GenerateCode;