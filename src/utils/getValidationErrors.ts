import { ValidationError } from 'yup'

interface IErrorResponse {
  [key: string]: string
}

export default function getValidationErrors(err: ValidationError): IErrorResponse {
  const validationErrors: IErrorResponse = {}

  err.inner.forEach(e => {
    validationErrors[e.path] = e.message
  })

  return validationErrors
}
