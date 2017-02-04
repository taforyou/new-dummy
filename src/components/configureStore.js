import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import playerReducer from './PlayerReducerComponent'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    playerReducer,
    preloadedState,
    applyMiddleware(
      loggerMiddleware
    )
  )
}
