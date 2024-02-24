import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigations';
import configureStore from './src/redux/store';
import initialStates from './src/redux/initial-states';

function App(): React.JSX.Element {
  const { store } = configureStore(initialStates);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
export default App;
