import styled from 'styled-components'
import { Orientation } from '../../types'

export default styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${({ orientation, first, last }) => (
    orientation !== Orientation.Column
      ? first
        ? 'padding-right: 0.5rem;'
        : last
          ? 'padding-left: 0.5rem;'
          : 'padding-left: 0.5rem; padding-right: 0.5rem;'
      : ''
  )};
`
