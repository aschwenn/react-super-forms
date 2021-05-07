import React from 'react'
import { Story, Meta } from '@storybook/react'

import Form from '..'
import { FieldType, FormProps, Orientation } from '../types'

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
  }
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args} />

export const Simple = Template.bind({})
Simple.args = {
  fields: [
    {
      type: FieldType.SECTION,
      title: 'Basic Information',
      subtitle: 'This section asks for some basic information from the user.',
      orientation: Orientation.Column,
      children: [
        {
          type: FieldType.SECTION,
          orientation: Orientation.Row,
          children: [
            {
              type: FieldType.TEXT,
              id: 'projectName',
              label: 'Project Name',
              required: true,
              placeholder: 'Enter the name of your project...',
              hint: 'Don\'t worry, you can change this later!',
              maxLength: 50
            },
            {
              type: FieldType.TEXT,
              id: 'projectOwner',
              label: 'Project Owner',
              placeholder: 'Enter a project owner...',
              maxLength: 50
            }
          ]
        },
        {
          type: FieldType.TEXTAREA,
          id: 'description',
          label: 'Description',
          required: true,
          placeholder: 'Enter a description of your project...'
        }
      ]
    }
  ],
  onSubmit: (data) => console.info(data),
}
