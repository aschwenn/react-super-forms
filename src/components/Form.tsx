import React from 'react'

import {
  FormProps
} from '../types'

const Form = ({
  fields,
  onSubmit,
  liveSubmit,
  onCancel,
  className,
  submitButtonProps,
  cancelButtonProps
}: FormProps): React.ReactElement => {
  return (
    <div className={className}>
      Test
    </div>
  )
}

export default Form
