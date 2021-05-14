import React from 'react'
import styled from 'styled-components'

import { Container } from '../../types'

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ children }: Container): React.ReactElement => (
  <CheckboxGroup>
    {children}
  </CheckboxGroup>
)
