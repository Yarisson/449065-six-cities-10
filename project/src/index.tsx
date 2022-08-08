import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import reviews from './mocks/reviews';
import nearPlaces from './mocks/nearPlaces';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App nearPlaces={nearPlaces} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
