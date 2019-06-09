import styled from "styled-components"

const Tiles = styled.div`
  display: grid;
  background: #bbada0;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 262px;
  height: 262px;
  border-radius: 6px;
  padding: 10px;
  margin: 20px 20px;
`

export default Tiles
