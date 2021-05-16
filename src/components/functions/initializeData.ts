import { CheckboxField, Field, FieldType, MultiOption, RadioField, SelectField, TextAreaField, TextField } from '../../types'

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
    case FieldType.RADIO: {
      const tmpField = f as RadioField
      if (tmpField.defaultValue !== undefined && tmpField.defaultValue !== null && tmpField.items) {
        const defaultId = (
          (typeof tmpField.defaultValue === 'object')
            ? tmpField.defaultValue.value
            : tmpField.defaultValue
        )
        const maybeIndex = tmpField.items.map((item) => item.value).indexOf(defaultId)
        if (maybeIndex >= 0) tmp[tmpField.id] = tmpField.items[maybeIndex]
        else tmp[tmpField.id] = undefined
      } tmp[tmpField.id] = undefined
      break
    }
    case FieldType.CHECKBOX: {
      const tmpField = f as CheckboxField
      if (tmpField.defaultValue && tmpField.defaultValue.length && tmpField.items) {
        const itemsIds = tmpField.items.map((item) => item.value)
        tmp[tmpField.id] = (
          tmpField.defaultValue.reduce((list, def) => {
            const defaultId = typeof def === 'object' ? def.value : def
            const maybeIndex = itemsIds.indexOf(defaultId)
            if (maybeIndex >= 0) list.push(tmpField.items[maybeIndex])
            return list
          }, [])
        )
      }
      else tmp[tmpField.id] = []
      break
    }
    case FieldType.SELECT: {
      const tmpField = f as SelectField
      if (tmpField.defaultValue !== undefined && tmpField.defaultValue !== null && tmpField.items) {
        const defaultId = (
          (typeof tmpField.defaultValue === 'object')
            ? tmpField.defaultValue.value
            : tmpField.defaultValue
        )
        const maybeIndex = tmpField.items.map((item) => item.value).indexOf(defaultId)
        if (maybeIndex >= 0) tmp[tmpField.id] = tmpField.items[maybeIndex]
        else tmp[tmpField.id] = undefined
      } tmp[tmpField.id] = undefined
      break
    }
    }
  })
  return tmp
}
