/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
