import React from 'react'
import styled from 'styled-components'

import { FormGroup } from '../../types'
import { Muted } from '../styled'

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
const Label = styled.label`
  margin-bottom: 0.25rem;
`
const Required = styled(Muted)`
  margin-left: 0.25rem;
`
const Hint = styled(Muted)`
  margin-top: 0.25rem;
  font-size: 0.875em;
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
