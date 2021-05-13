import React from 'react'
import styled from 'styled-components'

import { Container } from '../../types'

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ children }: Container): React.ReactElement => (
  <RadioGroup>
    {children}
  </RadioGroup>
)
