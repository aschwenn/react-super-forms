import React from 'react'

import { Select } from '../../types'

export default ({ label, id, ...props }: Select): React.ReactElement => (
  <>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...props} />
  </>
)
