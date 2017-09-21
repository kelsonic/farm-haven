// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

// Import create-react-app service worker (houses webpack, babel, etc. config)
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/App';

// Inject global styles
import './globalStyles.css';

// Import reducers and create shape of store
import gameReducer from './containers/Game/reducer';
const rootReducer = combineReducers({
  game: gameReducer,
});

// Enable Redux DevTools if available
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Create store
const store = createStore(rootReducer, enableReduxDevTools);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
