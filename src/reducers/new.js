import { RESET, SHIFT_LEFT } from "../actions"

const initialState = {
  score: 0,
  observation: [
    [0, 0, 0, 0], //
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  reward: 0,
  done: false
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case RESET: {
      let observation = []
      for (let i = 0; i < 4; i++) {
        observation[i] = initialState.observation[i].slice()
      }
      return {
        observation
      }
    }
    case SHIFT_LEFT: {
      let observation = []
      for (let i = 0; i < 4; i++) {
        observation[i] = state.observation[i].slice()
      }
      let n = 0
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (observation[i][j] !== 0) {
            for (let k = j + 1; k < 4; k++) {
              if (observation[i][k] !== 0) {
                if (observation[i][j] === observation[i][k]) {
                  observation[i][j++] *= 2
                  observation[i][k] = 0
                }
                break
              }
            }
          }
        }
        for (let j = 0; j < 4; j++) {
          for (let k = j + 1; k < 4; k++) {
            if (observation[i][j] === 0 && observation[i][k] !== 0) {
              observation[i][j] = observation[i][k]
              observation[i][k] = 0
            }
          }
        }
        for (let j = 0; j < 4; j++) {
          if (observation[i][j] === 0) {
            n++
          }
        }
      }
      let m = Math.floor(Math.random() * n)
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (observation[i][j] === 0) {
            if (m === 0) {
              observation[i][j] = Math.random() < 0.9 ? 2 : 4
            }
            m--
          }
        }
      }
      return {
        observation,
        reward: Math.floor(Math.random() * 4)
      }
    }
    default:
      return state
  }
}

export default reducer
