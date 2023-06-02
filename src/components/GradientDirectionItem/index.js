import {ListItemButton} from './styledComponents'

// Write your code here
const GradientDirectionItem = props => {
  const {item, isActiveDirection, changeActiveDirection} = props
  const onChangeDirec = () => {
    changeActiveDirection(item.value)
  }
  return isActiveDirection ? (
    <li>
      <ListItemButton active>{item.displayText}</ListItemButton>
    </li>
  ) : (
    <li>
      <ListItemButton onClick={onChangeDirec}>
        {item.displayText}
      </ListItemButton>
    </li>
  )
}

export default GradientDirectionItem
