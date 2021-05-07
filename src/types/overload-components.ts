/** input props for any components that can be overloaded */

import React from 'react'

interface Base {
  style?: Record<string, string>
  children?: React.ReactNode
}

export interface Button extends Base {
  className?: string
}

export type OverloadComponentUnion = Button
