import React from 'react'

import { TextInput } from '../../types'

export default ({ password, autoComplete, ...props }: TextInput): React.ReactElement => (
  <input
    type={password ? 'password' : 'text'}
    autoComplete={autoComplete ? 'on' : 'off'}
    {...props}
  />
)
