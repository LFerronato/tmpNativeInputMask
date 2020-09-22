import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  margin: 60px 20px 0 20px;
  align-items: center;
`

export const ScrollContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`
export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 0 0px ${Platform.OS === 'ios' ? 40 : 120}px;
  margin-bottom: 30px;
  max-height: 800px;
`
export const CreateNow = styled.View`
  margin-top: 20px;
  align-items: center;
`

export const CreateNowText = styled.Text`
  color: #ffff;
  font-size: 20px;
  font-family: 'Archivo_400Regular';
`

export const CreateAccountButtonNow = styled.TouchableOpacity`
  margin: 15px 0 ${40 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: auto;

  height: 60px;
  background: ${Platform.OS === 'ios' ? '#4a4a4a' : '#6a6a6a'};
  border-radius: 5px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`

export const CreateAccountButtonNowText = styled.Text`
  margin: 0 40px 0 40px;
  font-family: 'Archivo_600SemiBold';
  font-size: 24px;
  color: #ffffff;
`
