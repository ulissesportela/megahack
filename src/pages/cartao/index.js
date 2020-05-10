import React from 'react'
import { useNavigation } from '@react-navigation/native'
//import MailCompose from 'react-native-mail-compose'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import logoImg from '../assets/logo.png'
import styles from './styles'

export default function Detalhe() {
    const navigation = useNavigation()
    const message = `Olá Participante, entonteri seu cartão no Tarrafa, vamos conversar.`

    function navigateBack() {
        navigation.goBack()
    }


    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5561999999999&text=${message}`)
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Icon name='arrow-left' size={16} color="#83DEA3" />
                </TouchableOpacity>
            </View>
            <View style={styles.cartao} >
                <Text style={[styles.cartaoProperty, { marginTop: 0 }]}>Nome:</Text> 
                <Text style={styles.cartaoValue}>Lorie Smith de Brasília/DF </Text> 

                <Text style={styles.cartaoProperty}>Bio:</Text> 
                <Text style={styles.cartaoValue}>Gestora de créditos da XYZ Bank, onde a Lorie processa os pedidos de empréstimo do início ao fim, incluindo o refinanciamento de hipotecas e educando os clientes sobre suas diferentes opções de financiamento.</Text> 

                <Text style={styles.cartaoProperty}>Tipo de network:</Text> 
                <Text style={styles.cartaoValue}>Profissional</Text> 
            </View>
            <View style={styles.contactBox} >
                <Text style={styles.networkTitle}>Faça network!</Text> 
                <Text style={styles.networkTitle}>Inicie uma conversa.</Text>

                <Text style={styles.networkDescription}>Entre em contato:</Text> 

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WatsApp</Text> 
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}