
import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  FormGroup,
  InputGroup,
  TextArea,
  Button,
  Radio,
  RadioGroup,
  Checkbox
} from '@blueprintjs/core'
import styled from 'styled-components'

// import './OverloadedForm.css'
import Form from '..'
import BasicForm from './BasicForm'
import { FormProps } from '../types'

const StyledTextArea = styled(TextArea)`
  font-family: inherit;
`

export default {
  title: 'Example/OverloadedForm',
  component: Form,
  argTypes: {
  }
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args} />

export const Simple = Template.bind({})
Simple.args = {
  fields: BasicForm,
  onSubmit: (data) => console.info(data),
  components: {
    formgroup: ({ required, requiredDenotation, hint, ...props }) => (
      <FormGroup
        labelInfo={required ? requiredDenotation || '(required)' : ''}
        helperText={hint}
        {...props}
      />
    ),
    textfield: (props) => <InputGroup type="text" {...props} />,
    textareafield: (props) => <StyledTextArea fill {...props} />,
    button: (props) => <Button {...props} />,
    radio: (props) => <Radio {...props} />,
    radiogroup: (props) => <RadioGroup {...props} />,
    checkbox: (props) => <Checkbox {...props} />
  }
}
