import React from 'react'
import './App.css'
import state from './redux/store'
import {Provider} from 'react-redux'
import LinksContainer from './components/links/linksContainer'

const App=()=>{
  return (
    <Provider store={state}>
      <div className="App">
      <LinksContainer/>
      </div>
    </Provider>
  );
}

export default App
