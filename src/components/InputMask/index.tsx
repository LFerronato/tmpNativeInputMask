// eslint-disable-next-line no-use-before-define
import React, { useState, useCallback } from 'react'
// import { TextInputProps } from 'react-native'
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'
import Input from '../Input'

interface ITextInputMaskProps extends TextInputMaskProps {
  name: string
}

const InputMask: React.FC<ITextInputMaskProps> = ({ type, name, ...rest }) => {
  const [value, setValue] = useState('')
  const [rawValue, setRawValue] = useState('')
  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue)
    setRawValue(unmaskedValue)
  }, [])

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        name,
        ...rest,
      }}
      {...rest}
    />
  )
}
export default InputMask
