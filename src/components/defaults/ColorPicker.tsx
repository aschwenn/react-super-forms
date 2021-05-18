import React from 'react'

import { Input } from '../../types'

export default (props: Input): React.ReactElement => (
  <input type="color" {...props} />
)
