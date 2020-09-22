import styled from 'styled-components/native'

import FontAwesome from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View``

interface IContent {
  hasError: boolean
}
export const Content = styled.View<IContent>`
  min-width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.hasError ? '#f56060' : '#fff')};
  align-items: center;
  flex-direction: row;
`

export const TextInput = styled.TextInputMask`
  flex: 1;
  color: #ffffff;
  height: 100%;
  box-shadow: 0px 3px 5px #212121;
  font-size: 20px;
  font-family: 'Archivo_500Medium';
`

export const Icon = styled(FontAwesome)`
  margin-right: 16px;
  box-shadow: 0px 3px 5px #212121;
  justify-content: space-between;
`
export const Error = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 45px;
`
export const IconError = styled(FontAwesome)`
  margin-right: 4px;
  justify-content: space-between;
`
