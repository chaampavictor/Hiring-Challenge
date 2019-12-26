import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/index'
import store from './redux/store/store';


export default function App() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
}