import React from 'react'
import styled from 'styled-components'

import { TextAreaInput } from '../../types'

const TextArea = styled.textarea`
  max-width: 100%;
  font-family: inherit;
`

export default (props: TextAreaInput): React.ReactElement => (
  <TextArea
    {...props}
  />
)
