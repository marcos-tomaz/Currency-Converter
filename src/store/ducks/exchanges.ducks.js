import { createActions, createReducer } from 'reduxsauce'
import { v4 } from 'uuid'

export const { Types, Creators } = createActions({
  addExchange: ['exchange'],
  removeExchange: ['id'],
  loadExchanges: ['exchanges']
})

const INITIAL_STATE = { loading: false, exchanges: null, message: null }

const add = (state = INITIAL_STATE, action) => {
  if (state.exchanges && state.exchanges.length >= 10) {
    const last = state.exchanges.pop()

    return {
      loading: false,
      exchanges: [
        { ...action.exchange, id: v4(), createdAt: new Date() },
        ...state.exchanges.filter((exchange) => exchange.id !== last.id)
      ]
    }
  }

  return {
    loading: false,
    exchanges: [
      { ...action.exchange, id: v4(), createdAt: new Date() },
      ...(state.exchanges ? state.exchanges : [])
    ]
  }
}

const remove = (state = INITIAL_STATE, action) => ({
  loading: false,
  exchanges: state.exchanges.filter(
    (exchange) => exchange.id !== action.id
  )
})

const load = (state = INITIAL_STATE, action) => ({
  loading: false,
  exchanges: action.exchanges
})

export default createReducer(INITIAL_STATE, {
  [Types.ADD_EXCHANGE]: add,
  [Types.LOAD_EXCHANGES]: load,
  [Types.REMOVE_EXCHANGE]: remove
})
