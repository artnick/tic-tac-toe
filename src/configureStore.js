import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

export default function configureStore(socket, preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk.withExtraArgument(socket),
      logger
    )
  );
}