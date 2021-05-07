import React from 'react'
import styled from 'styled-components'

import { Heading } from '../../types'

const Title = styled.h1`
  font-weight: normal;
  margin: 0.25rem 0;
`

export default (props: Heading): React.ReactElement => (
  <Title {...props} />
)
