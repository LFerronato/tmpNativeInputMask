// eslint-disable-next-line no-use-before-define
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'

import SignUp from '../pages/SignUp'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: `${Platform.OS === 'ios' ? '#000000' : '#222222'}`,
      },
    }}
    initialRouteName="SignUp"
  >
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
)

export default AuthRoutes
