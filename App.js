import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './app/store'
import Tweets from './app/tweets'

type Props = {};
class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <Tweets />
      </Provider>
    )
  }
}

export default App
