import React from 'react'
import styled from 'styled-components'

import { Input } from '../../types'

const Radio = styled.div`
  display: flex;
`
const Label = styled.label`
  margin-left: 0.25rem;
`

export default (props: Input): React.ReactElement => (
  <Radio>
    <input type="radio" {...props} />
    <Label htmlFor={props.id}>{props.id}</Label>
  </Radio>
)
