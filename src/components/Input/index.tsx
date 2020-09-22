/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useCallback } from 'react'
import { TextInputProps, Text } from 'react-native'
import { useField } from '@unform/core'

import { Container, Content, TextInput, Icon, IconError, Error } from './style'

interface IInputProps extends TextInputProps {
  name: string
  icon?: string
  rawValue?: string
}

const Input: React.FC<IInputProps> = ({
  name,
  icon,
  onChangeText,
  rawValue,
  ...rest
}) => {
  const inputRef = useRef(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)
  const handleOnChange = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text
      if (onChangeText) onChangeText(text)
    },
    [onChangeText],
  )
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue
    }
  }, [defaultValue])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.setInputValue('')
        ref.value = ''
      },
      setValue(ref, value) {
        ref.setInputValue(value || '')
        ref.value = value
      },
      getValue(ref: { value: string | '' }) {
        return rawValue || ref.value || ''
      },
    })
  }, [fieldName, rawValue, registerField])

  return (
    <Container>
      <Content hasError={!!error}>
        {icon && <Icon name={icon} size={20} color="#fff" />}
        <TextInput
          ref={inputRef}
          keyboardAppearance="dark"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff7"
          defaultValue={defaultValue}
          onChangeText={handleOnChange}
          {...rest}
        />
      </Content>
      {!!error && (
        <Error>
          <IconError name="exclamation-circle" size={14} color="#f56060" />
          <Text style={{ color: '#f56060' }}>{error}</Text>
        </Error>
      )}
    </Container>
  )
}
export default Input
