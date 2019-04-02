import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { RouterState } from 'connected-react-router';
import { getapi } from '../isormorphic/restapi'

const TRANSITION = 'shopcassette/transition'
const RESET = 'shopcassette/reset'
const SET_ACTION = 'thunk/set'
const SET_FETCHING = 'thunk/setfetch'

type Transition = {
  type: typeof TRANSITION
}
type Reset = {
  type: typeof RESET
  data: object
}

type SetAction = {
  type: typeof SET_ACTION
  accessToken: string
}
type SetFetcing = {
  type: typeof SET_FETCHING
  isFetching: boolean
}

export type Action = Transition | Reset | SetAction | SetFetcing

export const transition = (): Transition => ({ type: TRANSITION })
export const reset = (data: object): Reset => ({ type: RESET, data })
export const set = (accessToken: string): SetAction => ({ type: SET_ACTION, accessToken })
export const isFetching = (isFetching: boolean): SetFetcing => ({ type: SET_FETCHING, isFetching })

export const pagination = (page: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(isFetching(true))
    return getapi(page)
  }
}

export type RootState = ShopCassette & {
  router: RouterState
}

export type AccessToken = {
  isFetching: boolean
  accessToken?: string
}

export type ShopCassette = AccessToken & {
  rest: {
    id: string,
    image_url: { shop_image1: string }
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
        image_url: { shop_image1: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      },
      {
        id: "a00001",
        image_url: { shop_image1: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      },
      {
        id: "a00001",
        image_url: { shop_image1: "https://uds.gnst.jp/rest/img/jwhsmt630000/t_00if.jpg" },
        name: "ＩＳＯＬＡ ｂｌｕ",
        category: "本格窯焼イタリアンバル",
        url: "http://",
        address: "〒104-0061 東京都中央区銀座1-13-8"
      }
    ],
    isFetching: false
  }
}

export const reducer = (
  state = initialCounterState(),
  action: Action
) => {
  switch (action.type) {
    case TRANSITION:
      return state
    case RESET:
      return {...state, rest: action.data}
    case SET_ACTION:
        return { ...state, accessToken: action.accessToken }
    case SET_FETCHING:
        return { ...state, isFetching: action.isFetching }
    default: {
      return state
    }
  }
}
