import { Field } from '../../types'

/**
 * Removes extra properties not needed for the input field component itself
 */
export default (field: Field): Field => {
  const tmp = { ...field }
  delete tmp.type
  delete tmp.label
  delete tmp.required
  delete tmp.validator
  delete tmp.hint
  delete tmp.className
  return tmp
}