import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import logoImg from '../assets/logo.png'
import styles from './styles'
import api from '../../services/api'

export default function Cartoes() {
    const [cartoes, setCartoes] = useState([])

    const [qtdCartoes, setQtdCartoes] = useState(0)

    const navigation = useNavigation()

    function navigateToCartao(cartao) {
        navigation.navigate('Cartao', { cartao })
    }

    async function loadCartoes() {
        const response = await api.get('cartoes')

        setCartoes(response.data)
        setQtdCartoes(Object.keys(response.data).length)
    }

    useEffect(() => {
        loadCartoes()
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{qtdCartoes} cartões</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos cartões abaixo e inicie um network.</Text>

            <FlatList
                style={styles.cartaoList} 
                data={cartoes}
                keyExtractor={cartao => String(cartao.usuario_id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: cartao }) => (
                    <View style={styles.cartao} >
                        <Text style={styles.cartaoProperty}>Nome:</Text> 
                        <Text style={styles.cartaoValue}>{cartao.nome}</Text> 

                        <Text style={styles.cartaoProperty}>Bio:</Text> 
                        <Text style={styles.cartaoValue}>{cartao.descricao}</Text> 

                        <Text style={styles.cartaoProperty}>Tipo de network:</Text> 
                        <Text style={styles.cartaoValue}>{cartao.tipo_networking.map(el => el.nome)}</Text> 

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToCartao(cartao)}>
                            <Text style={styles.detailsButtonText}>Ver mais datalhes</Text>
                            <Icon name='info-circle' size={16} color="#83DEA3" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}