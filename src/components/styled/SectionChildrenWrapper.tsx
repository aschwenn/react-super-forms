import styled from 'styled-components'
import { Orientation } from '../../types'

export default styled.div`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === Orientation.Row ? 'row' : 'column'};
  ${({ paddingTop }) => paddingTop && 'padding-top: 1rem;'}
`
