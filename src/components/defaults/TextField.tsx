import React from 'react'

import { TextInput } from '../../types'

export default ({ textFieldType, autoComplete, ...props }: TextInput): React.ReactElement => (
  <input
    type={textFieldType}
    autoComplete={autoComplete ? 'on' : 'off'}
    {...props}
  />
)
