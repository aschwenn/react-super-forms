import React, { useEffect, useState } from 'react'

import {
  Field,
  FormProps, MultiOption, OverloadComponent, OverloadComponentUnion
} from '../types'
import { ButtonContainer } from './styled'
import * as DefaultComponents from './defaults'
import { flatten, initializeData } from './functions'

const Form = ({
  fields,
  onSubmit,
  liveSubmit,
  onCancel,
  className,
  submitButtonProps,
  cancelButtonProps,
  components: overloadComponents
}: FormProps): React.ReactElement => {
  const [data, setData] = useState<Record<string, string | number | boolean | MultiOption>>({})
  const [valid, setValid] = useState<boolean>(false)
  const [flattenedFields, setFlattenedFields] = useState<Array<Field>>([])
  /** hashmap of overloadable components to be used in form */
  const [components, setComponents] = useState<Record<OverloadComponent, React.FC<OverloadComponentUnion>>>()

  /** override default components */
  useEffect(() => {
    const tmp: Record<OverloadComponent | string, React.FC<OverloadComponentUnion>> = {}
    Object.keys(OverloadComponent).forEach((key) => {
      const c = OverloadComponent[key]
      if (overloadComponents && c in overloadComponents) tmp[c] = overloadComponents[c]
      else tmp[c] = DefaultComponents[c]
    })
    setComponents(tmp)
  }, [overloadComponents])

  /** initialize data */
  useEffect(() => {
    if (!Object.keys(data).length) {
      const tmp = flatten(fields)
      setFlattenedFields(tmp)
      setData(initializeData(tmp))
    }
  }, [fields])

  if (!fields || !components) return null

  return (
    <form
      className={className}
      onSubmit={(e) => {
        /** prevent submitting before validating */
        e.preventDefault()
        if (valid) onSubmit(data)
      }}
    >
      {
        !liveSubmit && (
          <ButtonContainer>
            {
              onCancel && (
                <components.button
                  className={cancelButtonProps?.className}
                  style={{ marginRight: '0.5rem' }}
                >
                  {cancelButtonProps?.children || 'Cancel'}
                </components.button>
              )
            }
            <components.button className={submitButtonProps?.className}>
              {submitButtonProps?.children || 'Submit'}
            </components.button>
          </ButtonContainer>
        )
      }
    </form>
  )
}

export default Form
