export const RESET = "RESET"
export const SHIFT_UP = "SHIFT_UP"
export const SHIFT_DOWN = "SHIFT_DOWN"
export const SHIFT_LEFT = "SHIFT_LEFT"
export const SHIFT_RIGHT = "SHIFT_RIGHT"

export const reset = () => ({ type: RESET })
export const shiftUp = () => ({ type: SHIFT_UP })
export const shiftDown = () => ({ type: SHIFT_DOWN })
export const shiftLeft = () => ({ type: SHIFT_LEFT })
export const shiftRight = () => ({ type: SHIFT_RIGHT })

export const sample = () => {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return shiftUp()
    case 1:
      return shiftDown()
    case 2:
      return shiftLeft()
    default:
      return shiftRight()
  }
}

export default {
  reset,
  sample,
  shiftUp,
  shiftDown,
  shiftLeft,
  shiftRight
}
