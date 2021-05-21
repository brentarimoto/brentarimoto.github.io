/*************** REACT IMPORTS ***************/
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

/*************** OTHER IMPORTS ***************/
import {useAnimationContext} from '../../context/AnimationContext'

import './NavBar.css'

/*************** COMPONENTS ***************/
function NavBar() {

  const history = useHistory()


  // Use States
  const [linkDisplay, setLinkDisplay] = useState(window.innerWidth>850 ? 'grid' : 'none');
  const [linksAnimation, setLinksAnimation] = useState('')


   // Context States For Animation
  const {
          navBarAnimation, setNavBarAnimation,
          setAboutAnimation,
          setProfSummaryAnimation,
          setProfFadeInAnimation,
          setProfLeftInAnimation,
          setProfRightInAnimation,
          setProfProjectsAnimation,
          setOtherInterestsAnimation,
          setContactAnimation,
          setOverflow} = useAnimationContext()

  // Object Defining Intro Animations For Each Page
  const introAnimation = {
    'home': ()=>{setNavBarAnimation('2s ease 0s 1 slideOutToTop')},
    'about': ()=>{setAboutAnimation('')},
    'professional' : ()=>{
                          setProfSummaryAnimation('1s ease 0s 1 scaleUp')
                          setProfFadeInAnimation('1s ease 0s 1 fadeIn')
                          setProfLeftInAnimation('1s ease 0s 1 slightInFromLeft')
                          setProfRightInAnimation('1s ease 0s 1 slightInFromRight')
                          setProfProjectsAnimation('')
    },
    'other-interests': ()=>{setOtherInterestsAnimation('')},
    'contact': ()=>{setContactAnimation('1s ease 0s 1 scaleUp')}
  }


  // Object Defining Outro Animations For Each Page
  const outroAnmiation = {
    'about': ()=>{setAboutAnimation('3s ease 0s 1 slideOutToLeft')},
    'professional' : ()=>{
                          setProfSummaryAnimation('1s ease 0s 1 slideOutToTop')
                          setProfFadeInAnimation('1s ease 0s 1 fadeOut')
                          setProfLeftInAnimation('1s ease 0s 1 fadeOut')
                          setProfRightInAnimation('1s ease 0s 1 fadeOut')
                          setProfProjectsAnimation('1.5s ease 0s 1 slideOutToTop')
    },
    'other-interests': ()=>{setOtherInterestsAnimation('3s ease 0s 1 slideOutToRight')},
    'contact': ()=>{setContactAnimation('.5s ease 0s 1 scaleDown')}
  }


  // Click Handler For The NavLinks
  const clickHandle=(e)=>{
    e.preventDefault()

    if(document.querySelector('.main__error-div')){
      history.replace(`/${e.target.name==='home' ? '' :e.target.name}`)
    }

    if(!document.querySelector('.navbar--active')){
      return
    }

    const currentName = document.querySelector('.navbar--active').name

    if(e.target.name===currentName){
      return
    }

    introAnimation[e.target.name]()

    outroAnmiation[currentName]()

    if(linkDisplay!=='grid'){
      setLinksAnimation('2s ease 0s 1 slideOutToRight')
    }

    setTimeout(()=>{
        history.replace(`/${e.target.name==='home' ? '' :e.target.name}`)
        if(linkDisplay!=='grid'){
          setLinkDisplay(sidebarSwitch[linkDisplay])
          setOverflow(overflowSwitch[linkDisplay])
        }
    },300)
  }


  // Handler for SIDEBAR Click
  const sidebarSwitch = {
    flex: 'none',
    none: 'flex'
  }

  const overflowSwitch = {
    flex: 'auto',
    none: 'hidden'
  }

  const handleSidebar = (e)=>{
    if(window.innerWidth>850){return}

    if(linkDisplay==='none'){setLinksAnimation('.5s ease 0s 1 slideInFromRight')}
    else if(linkDisplay==='flex'){setLinksAnimation('2s ease 0s 1 slideOutToRight')}


    setTimeout(()=>{
      setLinkDisplay(sidebarSwitch[linkDisplay])
      setOverflow(overflowSwitch[linkDisplay])
    },100)
  }

  // Resize Handler
  const handleResize= ()=>{
    if(window.innerWidth>850){
      setLinkDisplay('grid')
      setLinksAnimation('')
    } else {
      if(document.querySelector('.navbar__links')?.style.display !=='flex'){
        setLinkDisplay('none')
      }
    }
  }

  // Window Resize Listener
  window.addEventListener('resize', handleResize)



  // Jsx Return
  return (
    <nav className='navbar' style={{animation:navBarAnimation}}>
        <h2 className='navbar__item navbar__name'>Brent Arimoto</h2>
        <div className='navbar__item navbar__sidebar'>
          <div
            className='navbar__item navbar__sidebar-hamburger'
            onClick={handleSidebar}
            >
            <div className='navbar__item navbar__sidebar-hamburger-line'></div>
            <div className='navbar__item navbar__sidebar-hamburger-line'></div>
            <div className='navbar__item navbar__sidebar-hamburger-line'></div>
          </div>
        </div>
        <div style={{display: linkDisplay, animation:linksAnimation}} className='navbar__item navbar__links'>
          <NavLink activeClassName='navbar--active' className='navbar__item navbar__link navbar__home' exact to='/' name='home' onClick={clickHandle}>Home</NavLink>
          <NavLink activeClassName='navbar--active' className='navbar__item navbar__link navbar__about' to='/about' name='about' onClick={clickHandle}>About</NavLink>
          <NavLink activeClassName='navbar--active' className='navbar__item navbar__link navbar__professional' to='/professional' name='professional' onClick={clickHandle}>Professional</NavLink>
          <NavLink activeClassName='navbar--active' className='navbar__item navbar__link navbar__link navbar__other-interests' to='/other-interests' name='other-interests' onClick={clickHandle}>Other Interests</NavLink>
          <NavLink activeClassName='navbar--active' className='navbar__item navbar__link navbar__contact' to='/contact' name='contact' onClick={clickHandle}>Contact</NavLink>
        </div>
    </nav>
  );
}

/*************** EXPORT ***************/
export default NavBar;
