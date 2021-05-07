import { FieldType, Orientation } from '../types'

export default [
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
            id: 'password',
            label: 'Password',
            placeholder: 'Enter an access password...',
            maxLength: 50,
            password: true,
            required: true
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
]
