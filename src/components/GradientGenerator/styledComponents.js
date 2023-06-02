// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    ${props => `to ${props.direct}, ${props.color1}, ${props.color2}`}
  );
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
`

export const Input = styled.input`
  width: 50px;
  height: 50px;
`
export const MiniContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  width: 25vw;
`
export const Paragraph = styled.p`
  color: white;
`
export const Button = styled.button`
  color: white;
  background-color: #00c9b7;
  width: 100px;
  margin-left: 40%;
  margin-top: 10px;
  height: 30px;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25vw;
  list-style-type: none;
`
