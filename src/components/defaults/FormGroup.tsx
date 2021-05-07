import React from 'react'
import styled from 'styled-components'

import { FormGroup } from '../../types'
import colors from '../colors'

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`
const Label = styled.label`
  font-weight: lighter;
  margin-bottom: 0.25rem;
`
const Required = styled.span`
  font-weight: lighter;
  color: ${colors.muted};
  margin-left: 0.25rem;
`
const Hint = styled.span`
  color: ${colors.muted};
  margin-top: 0.25rem;
  font-size: 0.8em;
  font-weight: lighter;
`

export default ({
  label,
  labelFor,
  children,
  hint,
  required,
  requiredDenotation = '(required)',
  className,
  ...props
}: FormGroup): React.ReactElement => (
  <FormGroupWrapper className={className} {...props}>
    <Label for={labelFor}>
      {label}
      {required && <Required>{requiredDenotation}</Required>}
    </Label>
    {children}
    {hint && <Hint>{hint}</Hint>}
  </FormGroupWrapper>
)
