import {Component} from 'react'
import {
  Container,
  Heading,
  Paragraph,
  MiniContainer,
  Input,
  Button,
  UnorderedList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    data: {
      activeDirection: gradientDirectionsList[0].value,
      color1: '#8ae323',
      color2: '#014f7b',
    },
  }

  changeActiveDirection = value => this.setState({activeDirection: value})

  onChangeColor1 = event => this.setState({color1: event.target.value})

  onChangeColor2 = event => this.setState({color2: event.target.value})

  onSubmitColors = event => {
    event.preventDefault()
    const {color1, color2, activeDirection} = this.state
    this.setState({data: {color1, color2, activeDirection}})
  }

  render() {
    const {data, activeDirection, color1, color2} = this.state
    return (
      <Container
        color1={data.color1}
        color2={data.color2}
        direct={data.activeDirection}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              item={eachItem}
              isActiveDirection={activeDirection === eachItem.value}
              changeActiveDirection={this.changeActiveDirection}
            />
          ))}
        </UnorderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <MiniContainer>
          <Paragraph>{color1}</Paragraph>
          <Paragraph>{color2}</Paragraph>
        </MiniContainer>
        <form onSubmit={this.onSubmitColors}>
          <MiniContainer>
            <Input type="color" value={color1} onChange={this.onChangeColor1} />
            <Input type="color" value={color2} onChange={this.onChangeColor2} />
          </MiniContainer>
          <Button type="submit">Generate</Button>
        </form>
      </Container>
    )
  }
}

export default GradientGenerator
