import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import logoImg from '../assets/logo.png'
import styles from './styles'

export default function Cartoes() {
    const navigation = useNavigation()

    function navigateToCartao() {
        navigation.navigate('Cartao')
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>3 cartões</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos cartões abaixo e inicie um network.</Text>

            <FlatList
                style={styles.cartaoList} 
                data={[1,2,3]}
                keyExtractor={cartao => String(cartao)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.cartao} >
                        <Text style={styles.cartaoProperty}>Nome:</Text> 
                        <Text style={styles.cartaoValue}>Lorie Smith</Text> 

                        <Text style={styles.cartaoProperty}>Bio:</Text> 
                        <Text style={styles.cartaoValue}>Gestora de créditos da XYZ Bank, onde a Lorie processa os pedidos de empréstimo do início ao fim, incluindo o refinanciamento de hipotecas e educando os clientes sobre suas diferentes opções de financiamento.</Text> 

                        <Text style={styles.cartaoProperty}>Tipo de network:</Text> 
                        <Text style={styles.cartaoValue}>Profissional</Text> 

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToCartao}>
                            <Text style={styles.detailsButtonText}>Ver mais datalhes</Text>
                            <Icon name='info-circle' size={16} color="#83DEA3" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}