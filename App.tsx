// eslint-disable-next-line no-use-before-define
import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo'

import Routes from './src/routes'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#777777" />
      <View style={{ flex: 1, backgroundColor: '#777777' }}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App
