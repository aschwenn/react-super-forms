import React from 'react'

import { TextInput } from '../../types'

export default (props: TextInput): React.ReactElement => (
  <input
    type="text"
    {...props}
  />
)
