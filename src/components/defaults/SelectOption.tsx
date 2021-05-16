import React from 'react'

import { SelectOption } from '../../types'

export default (props: SelectOption): React.ReactElement => (
  <option {...props} />
)
