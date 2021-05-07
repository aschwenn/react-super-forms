import React from 'react'
import { TextAreaInput } from '../../types'

export default (props: TextAreaInput): React.ReactElement => (
  <textarea
    {...props}
  />
)
