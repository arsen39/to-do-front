import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {requestsPromiseMiddleware} from 'redux-saga-requests'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './saga';
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  requestsPromiseMiddleware(),
  thunk,
  createLogger(),
]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;