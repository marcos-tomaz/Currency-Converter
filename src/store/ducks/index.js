import { combineReducers } from 'redux'

import exchanges from './exchanges.ducks'
import currencies from './currencies.ducks'

export default combineReducers({ exchanges, currencies })
