import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// npm install react-redux
// the provider component will make the store available to all the components
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
// import { increment } from './actions/countAction'
import {startGetUsers} from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'


const store = configureStore()
console.log('redux initial state', store.getState())

store.subscribe(() => {
  console.log('store updated', store.getState())
})
// store.dispatch(increment())
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

//handle page reloads
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())


ReactDOM.render(jsx,
  document.getElementById('root')
);