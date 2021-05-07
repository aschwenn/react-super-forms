import { Field, FieldType, Section } from '../../types'

const flatten = (fields: Array<Field | Section>): Array<Field> => (
  fields.map((f) => (
    (f.type === FieldType.SECTION)
      ? flatten((f as Section).children || [])
      : f as Field
  )).flat()
)

export default flatten
