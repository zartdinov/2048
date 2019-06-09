import styled, { css } from "styled-components"

const Tile = styled.div`
  color: #776e65;
  font-size: 35px;
  font-weight: bold;
  line-height: 58px;
  border-radius: 3px;
  text-align: center;
  background: #cdc1b3;
  ${({ value }) => {
    switch (value) {
      case 2:
        return css`
          background: #eee4da;
        `
      case 4:
        return css`
          background: #ede0c8;
        `
      case 8:
        return css`
          color: #f9f6f2;
          background: #f2b179;
        `
      case 16:
        return css`
          color: #f9f6f2;
          background: #f59563;
        `
      case 32:
        return css`
          color: #f9f6f2;
          background: #f67c5f;
        `
      case 64:
        return css`
          color: #f9f6f2;
          background: #f65e3b;
        `
      case 128:
        return css`
          color: #f9f6f2;
          font-size: 25px;
          background: #edcf72;
        `
      case 256:
        return css`
          color: #f9f6f2;
          font-size: 25px;
          background: #edcc61;
        `
      case 512:
        return css`
          color: #f9f6f2;
          font-size: 25px;
          background: #edc850;
        `
      case 1024:
        return css`
          color: #f9f6f2;
          font-size: 15px;
          background: #edc53f;
        `
      case 2048:
        return css`
          color: #f9f6f2;
          font-size: 15px;
          background: #edc22e;
        `
      default:
        return
    }
  }};
`

export default Tile
