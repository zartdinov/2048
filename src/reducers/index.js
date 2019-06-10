import {
  RESET,
  SHIFT_UP,
  SHIFT_DOWN,
  SHIFT_LEFT,
  SHIFT_RIGHT
} from "../actions"

const initialState = {
  score: 0,
  observation: [
    [2, 2, 4, 4], //
    [8, 0, 8, 0],
    [4, 16, 4, 0],
    [2, 16, 2, 0]
  ],
  reward: 1,
  done: false
}

const shift = observation => {
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
  }
  return observation
}

const spawn = observation => {
  const map = new Map()
  for (let i = 0; i < observation.length; i++) {
    for (let j = 0; j < observation[i].length; j++) {
      map.set([i, j], observation[i][j])
    }
  }
  const zeros = Array.from(map).filter(([, value]) => value === 0)
  if (zeros.length > 0) {
    const [[i, j]] = zeros[Math.floor(Math.random() * zeros.length)]
    observation[i][j] = Math.random() < 0.9 ? 2 : 4
  }
  return observation
}

const rotate = matrix => {
  const n = matrix.length
  const x = Math.floor(n / 2)
  const y = n - 1
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      let k = matrix[i][j]
      matrix[i][j] = matrix[y - j][i]
      matrix[y - j][i] = matrix[y - i][y - j]
      matrix[y - i][y - j] = matrix[j][y - i]
      matrix[j][y - i] = k
    }
  }
  return matrix
}

const check = observation => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        observation[i][j] === 0 ||
        observation[i][j + 1] === 0 ||
        observation[i + 1][j] === 0 ||
        observation[i + 1][j + 1] === 0 ||
        observation[i][j] === observation[i][j + 1] ||
        observation[i][j] === observation[i + 1][j] ||
        observation[i][j + 1] === observation[i + 1][j + 1] ||
        observation[i + 1][j] === observation[i + 1][j + 1] ||
        observation[i][j] === 2048 ||
        observation[i][j + 1] === 2048 ||
        observation[i + 1][j] === 2048 ||
        observation[i + 1][j + 1] === 2048
      ) {
        return false
      }
    }
  }
  return true
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case RESET: {
      return {
        ...initialState
      }
    }
    case SHIFT_UP: {
      let observation = state.observation.slice()
      observation = rotate(observation)
      observation = rotate(observation)
      observation = rotate(observation)
      observation = shift(observation)
      observation = spawn(observation)
      observation = rotate(observation)
      return {
        observation,
        reward: Math.floor(Math.random() * 4),
        done: check(observation)
      }
    }
    case SHIFT_DOWN: {
      let observation = state.observation.slice()
      observation = rotate(observation)
      observation = shift(observation)
      observation = spawn(observation)
      observation = rotate(observation)
      observation = rotate(observation)
      observation = rotate(observation)
      return {
        observation,
        reward: Math.floor(Math.random() * 4),
        done: check(observation)
      }
    }
    case SHIFT_LEFT: {
      let observation = state.observation.slice()
      observation = shift(observation)
      observation = spawn(observation)
      return {
        observation,
        reward: Math.floor(Math.random() * 4),
        done: check(observation)
      }
    }
    case SHIFT_RIGHT: {
      let observation = state.observation.slice()
      observation = rotate(observation)
      observation = rotate(observation)
      observation = shift(observation)
      observation = spawn(observation)
      observation = rotate(observation)
      observation = rotate(observation)
      return {
        observation,
        reward: Math.floor(Math.random() * 4),
        done: check(observation)
      }
    }
    default:
      return state
  }
}

export default reducers
