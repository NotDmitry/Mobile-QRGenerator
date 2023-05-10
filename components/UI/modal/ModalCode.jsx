import {Text} from 'react-native'
import React from 'react'
import ModalView from './ModalView'
import QRCode from 'react-native-qrcode-svg'

const CodeModal = ({isVisible, setIsVisible, data}) => {
    return (
        <ModalView isVisible={isVisible} setIsVisible={setIsVisible}>
            {data
                ? <QRCode value={data} size={290}></QRCode>
                : <Text>You should input some text</Text>}
        </ModalView>
    )
}

export default CodeModal