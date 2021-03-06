import React from 'react'
import { Story, Meta } from '@storybook/react'

import Form from '..'
import BasicForm from './BasicForm'
import { FormProps } from '../types'

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
  }
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args} />

export const Simple = Template.bind({})
Simple.args = {
  fields: BasicForm,
  onSubmit: (data) => console.info(data),
}
