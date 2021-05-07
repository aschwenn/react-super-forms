import { Field, FieldType, MultiOption, TextAreaField, TextField } from '../../types'

export default (flattened_fields: Array<Field>): Record<string, string | number | boolean | MultiOption> => {
  const tmp = {}
  flattened_fields.forEach((f) => {
    switch (f.type) {
    case FieldType.TEXT: {
      const tmpField = f as TextField
      tmp[tmpField.id] = tmpField.defaultValue || ''
      break
    }
    case FieldType.TEXTAREA: {
      const tmpField = f as TextAreaField
      tmp[tmpField.id] = tmpField.defaultValue || ''
      break
    }
    }
  })
  return tmp
}
