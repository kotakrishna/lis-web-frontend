import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'react-redux';
import configureStore from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
