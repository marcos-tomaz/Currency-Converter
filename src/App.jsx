import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

import Home from './styles/pages/Home'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  )
}

export default App
