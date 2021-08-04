import React from 'react';
// import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from '../redux/RootReducer';
import Navigation from '../pages';
import { UserProvider, ProgressProvider } from './contexts';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const App = () => (
  <Provider store={store}>
    <ProgressProvider>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </ProgressProvider>
  </Provider>
);

export default App;
