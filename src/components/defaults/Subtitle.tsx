import React from 'react'
import styled from 'styled-components'

import { Heading } from '../../types'

const Subtitle = styled.h4`
  font-weight: lighter;
  margin: 0.25rem 0;
`

export default (props: Heading): React.ReactElement => (
  <Subtitle {...props} />
)
