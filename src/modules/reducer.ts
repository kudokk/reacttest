import { RouterState } from 'connected-react-router';

const TRANSITION = 'shopcassette/transition'
const DECREMENT = 'counter/decrement'
const RESET = 'counter/reset'

type Transition = {
  type: typeof TRANSITION
}
type Decrement = {
  type: typeof DECREMENT
}
type Reset = {
  type: typeof RESET
  payload: number
}

export type Action = Transition | Decrement | Reset

export const transition = (): Transition => ({ type: TRANSITION })
export const decrement = (): Decrement => ({ type: DECREMENT })
export const reset = (num: number): Reset => ({ type: RESET, payload: num })

export type RootState = {
  router: RouterState,
  img: object,
  title: string,
  desc: string,
  shopurl: string
}


export const initialCounterState = (): object => {
  return { 
    img: { path: "http://",alt: "店舗サムネイルです" },
    title: "店舗名",
    desc: "こういうお店",
    shopurl: "http://"
  }
}

export const reducer = (
  state = initialCounterState(),
  action: Action
) => {
  switch (action.type) {
    case TRANSITION: {
      return { state }
    }
    default: {
      return state
    }
  }
}
