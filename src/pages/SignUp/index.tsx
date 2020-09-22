// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Platform, StatusBar, KeyboardAvoidingView } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { cpf } from 'cpf-cnpj-validator'

import Input from '../../components/Input'
import InputMask from '../../components/InputMask'
import getValidationErrors from '../../utils/getValidationErrors'

import {
  Container,
  Content,
  CreateNow,
  CreateNowText,
  CreateAccountButtonNow,
  CreateAccountButtonNowText,
  ScrollContainer,
} from './style'

interface ISignUpData {
  name: string
  email: string
  cpf: string
  phone: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSigUp = useCallback(async (data: ISignUpData) => {
    console.log(data)
    try {
      formRef.current?.setErrors({})
      const schemaValidation = Yup.object().shape({
        fullname: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        phone: Yup.string().required('Fone obrigatório'),
        cpf_cnpj: Yup.string()
          .test('validCPF', 'CPF inválido', (cpfValue: string) => {
            if (!cpfValue) return false
            return cpf.isValid(cpfValue)
          })
          .required('CPF obrigatório'),
      })
      await schemaValidation.validate(data, {
        abortEarly: false,
      })
      console.log('Deu certo!')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(error))
      }
    }
  }, [])

  const testData = {
    fullname: 'teste',
    email: 't@t.t',
    cpf_cnpj: '01827050136',
    phone: '4199999999',
  }
  return (
    <>
      <StatusBar backgroundColor="#678B67" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollContainer keyboardShouldPersistTaps="handled">
          <Container>
            <Content behavior="padding" enabled={Platform.OS === 'ios'}>
              <Form ref={formRef} initialData={testData} onSubmit={handleSigUp}>
                <CreateNow>
                  <CreateNowText>Crie sua conta</CreateNowText>
                </CreateNow>

                <Input
                  autoCorrect={false}
                  name="fullname"
                  placeholder="Nome Completo"
                  autoCapitalize="characters"
                />
                <Input
                  autoCorrect={false}
                  keyboardType="email-address"
                  name="email"
                  placeholder="E-mail"
                />
                <InputMask
                  type="cpf"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  name="cpf_cnpj"
                  placeholder="CPF"
                />
                <InputMask
                  type="cel-phone"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  name="phone"
                  placeholder="Celular"
                />
                <CreateAccountButtonNow
                  onPress={() => {
                    formRef.current?.submitForm()
                  }}
                >
                  <CreateAccountButtonNowText>Continuar</CreateAccountButtonNowText>
                </CreateAccountButtonNow>
              </Form>
            </Content>
          </Container>
        </ScrollContainer>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignUp
