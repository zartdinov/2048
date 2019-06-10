import React, { Component } from "react"
import { connect } from "react-redux"
import { Tile, Tiles } from "./components"
import { shiftUp, shiftDown, shiftLeft, shiftRight } from "./actions"

class App extends Component {
  componentDidMount() {
    document.onkeydown = e => {
      switch (e.key) {
        case "ArrowUp":
          this.props.onUpKeyPress()
          break
        case "ArrowDown":
          this.props.onDownKeyPress()
          break
        case "ArrowLeft":
          this.props.onLeftKeyPress()
          break
        case "ArrowRight":
          this.props.onRightKeyPress()
          break
        default:
      }
    }
  }

  render() {
    const { observation, done } = this.props
    if (done) {
      alert("Done!")
    }
    return React.createElement(
      Tiles,
      null,
      observation
        .flat()
        .map((value, key) =>
          React.createElement(Tile, { key, value }, value !== 0 ? value : null)
        )
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onUpKeyPress() {
    dispatch(shiftUp())
  },
  onDownKeyPress() {
    dispatch(shiftDown())
  },
  onLeftKeyPress() {
    dispatch(shiftLeft())
  },
  onRightKeyPress() {
    dispatch(shiftRight())
  }
})

const mapStateToProps = ({ score, observation, done }) => ({
  score,
  observation,
  done
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
