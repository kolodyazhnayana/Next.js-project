import '../styles/globals.scss'
 import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../store/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

function App({ Component, pageProps }) {
  return (
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
  ) 
}

export default App
