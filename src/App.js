/*************** REACT IMPORTS ***************/
import { Switch, Route, useLocation } from 'react-router-dom'

/*************** OTHER IMPORTS ***************/
import NavBar from './components/Navigation/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Professional from './components/Professional/Professional'
import OtherInterests from './components/OtherInterests/OtherInterests'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'

import {useAnimationContext} from './context/AnimationContext'


/*************** COMPONENTS ***************/
function App() {
  const location = useLocation()
  const {overflow} = useAnimationContext()

  return (
    <div className='background-dim' style={{overflow: overflow}}>
      <div className={location.pathname==='/' ? 'all-content-home' : 'all-content'}>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route>
            <NavBar />

            <div className='main'>
              <Switch>
                <Route exact path='/about'>
                  <About />
                </Route>
                <Route path='/professional'>
                  <Professional />
                </Route>
                <Route path='/other-interests'>
                  <OtherInterests />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route>
                  <Error />
                </Route>
              </Switch>
            </div>

          </Route>

        </Switch>

      </div>
    </div>
  );
}


/*************** EXPORT ***************/
export default App;
