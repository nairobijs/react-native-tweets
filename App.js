import React, { Component } from 'react';
import {
  Platform,
  UIManager
} from 'react-native';

import { Provider }  from 'react-redux';
import Store  from './app/Store';
import Tweets from './app/tweets/Tweets';


// Enable layout animations on android 
if (Platform.OS === 'android') { 
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <Tweets/>
      </Provider>
    )
  }
}

export default App;