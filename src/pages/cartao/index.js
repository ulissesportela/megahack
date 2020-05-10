import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
//import MailCompose from 'react-native-mail-compose'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import logoImg from '../assets/logo.png'
import styles from './styles'

export default function Detalhe() {
    const navigation = useNavigation()

    //capturando o cartão enviado por params
    const route = useRoute()
    const cartao = route.params.cartao

    const message = `Olá ${ cartao.nome}, entonteri seu cartão no Tarrafa! Vamos conversar?`
    
    function navigateBack() {
        navigation.goBack()
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${cartao.telefone}&text=${message}`)
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
                <Text style={styles.cartaoValue}>{ cartao.nome }</Text> 

                <Text style={styles.cartaoProperty}>Bio:</Text> 
                <Text style={styles.cartaoValue}>{ cartao.descricao }</Text> 

                <Text style={styles.cartaoProperty}>Tipo de network:</Text> 
                <Text style={styles.cartaoValue}>{cartao.tipo_networking.map(el => el.nome)}</Text> 
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