/*************** REACT IMPORTS ***************/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

/*************** OTHER IMPORTS ***************/
import './index.css';
import './reset.css'
import App from './App';
import AnimationProvider from './context/AnimationContext'


/*************** COMPONENTS ***************/
const Root = ()=>{
  return(
    <AnimationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimationProvider>
  )
}

/*************** RENDER ***************/

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
