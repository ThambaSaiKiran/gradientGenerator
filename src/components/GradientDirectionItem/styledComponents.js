// Style your elements here
import styled from 'styled-components'

export const ListItemButton = styled.button`
  color: #014f7b;
  background-color: white;
  padding: 10px;
  text-align: center;
  margin: 10px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
