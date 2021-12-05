import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { loadState, saveState } from '../utils/helper'
import fbConfig from '../utils/config'


const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let persistedState = loadState();

const store = createStore(
	reducer,
    persistedState,
	composeEnhancers(
    applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
)

store.subscribe( () => {
  saveState(store.getState());
})


export default configureStore({ reducer });