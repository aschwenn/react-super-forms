import React from 'react'
import styled from 'styled-components'

import { Input } from '../../types'

const Checkbox = styled.div`
  display: flex;
`
const Label = styled.label`
  margin-left: 0.25rem;
`

export default (props: Input): React.ReactElement => (
  <Checkbox>
    <input type="checkbox" {...props} />
    <Label htmlFor={props.id}>{props.id}</Label>
  </Checkbox>
)
