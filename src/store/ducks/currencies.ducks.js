import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loadCurrencies: [],
  successCurrencies: ['currencies'],
  errorCurrencies: ['message']
})

const INITIAL_STATE = { loading: false, currencies: [], message: null }

const load = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
})

const success = (state = INITIAL_STATE, action) => ({
  loading: false,
  currencies: action.currencies
})

const error = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  loading: false,
  message: action.message
})

export default createReducer(INITIAL_STATE, {
  [Types.LOAD_CURRENCIES]: load,
  [Types.SUCCESS_CURRENCIES]: success,
  [Types.ERROR_CURRENCIES]: error
})
