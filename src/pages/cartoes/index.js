import React from 'react'
import { View, Text, Image } from 'react-native'

import logoImg from '../assets/logo.png'
import styles from './styles'

export default function Cartoes() {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>5 cartões</Text>.
                </Text>
            </View>
        </View>
    )
}