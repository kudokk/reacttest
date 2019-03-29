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

export type RootState = ShopCassette & {
  router: RouterState
}

export type ShopCassette = {
  rest: {
    id: string,
    image_url: { path: string }
    name: string,
    category: string,
    url: string,
    address: string
  }[]; 
}


export const initialCounterState = (): object => {
  return { 
    rest: [
      {
        id: "a00000",
        image_url: { path: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      },
      {
        id: "a00001",
        image_url: { path: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      },
      {
        id: "a00001",
        image_url: { path: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      }
    ],
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
