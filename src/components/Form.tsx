import React, { useEffect, useState } from 'react'

import {
  FormProps, MultiOption, OverloadComponent
} from '../types'
import { ButtonContainer } from './styled'
import * as DefaultComponents from './defaults'

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
  /** hashmap of overloadable components to be used in form */
  const [components, setComponents] = useState<Record<OverloadComponent, React.FC>>()

  /** override default components */
  useEffect(() => {
    const tmp: Record<OverloadComponent | string, React.FC> = {}
    Object.keys(OverloadComponent).forEach((key) => {
      const c = OverloadComponent[key]
      if (overloadComponents && c in overloadComponents) tmp[c] = overloadComponents[c]
      else tmp[c] = DefaultComponents[c]
    })
    setComponents(tmp)
  }, [overloadComponents])

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
            <components.button>
              Submit
            </components.button>
          </ButtonContainer>
        )
      }
    </form>
  )
}

export default Form
