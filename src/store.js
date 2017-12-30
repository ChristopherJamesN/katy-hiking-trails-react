import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

store.subscribe(() => {
  saveState({
  });
});
export default store;
