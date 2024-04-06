import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import DebugMenu from '../components/DebugMenu';

import Bank from '../2-Bank/app/Bank';

function App() {
  return (
    //The `Provider` component makes the Redux store available to nested components
    <Provider store={store}>

      <DebugMenu />
      <Bank />

    </Provider>
  );
}

export default App;
