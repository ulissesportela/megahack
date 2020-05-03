import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Cartoes from './pages/cartoes'
import Cartao from './pages/cartao'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Cartoes" component={Cartoes} />
                <AppStack.Screen name="Cartao" component={Cartao} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}