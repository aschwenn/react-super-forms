import React from 'react'

import { Input } from '../../types'

export default (props: Input): React.ReactElement => (
  <>
    <input type="radio" {...props} />
    <label htmlFor={props.id}>{props.id}</label>
  </>
)
