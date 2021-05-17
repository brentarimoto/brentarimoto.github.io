/*************** REACT IMPORTS ***************/
import { NavLink, useHistory } from 'react-router-dom'
import {useAnimationContext} from '../../context/AnimationContext'


/*************** OTHER IMPORTS ***************/
import './Home.css'



/*************** COMPONENTS ***************/
function Home() {
    const {
        setNavBarAnimation,
        setAboutAnimation,
        setProfSummaryAnimation,
        setProfInfoAnimation,
        setProfProjectsAnimation,
        setOtherInterestsAnimation,
        setContactAnimation
    } = useAnimationContext()

    const history = useHistory()

    const clickHandle=(e)=>{
        e.preventDefault()
        setNavBarAnimation('1s ease 0s 1 slideInFromTop')
        setAboutAnimation('')
        setProfSummaryAnimation('1s ease 0s 1 scaleUp')
        setProfInfoAnimation('1s ease 0s 1 slideInFromTop')
        setProfProjectsAnimation('')
        setOtherInterestsAnimation('')
        setContactAnimation('1s ease 0s 1 scaleUp')
        document.querySelector('.home__item-info').style.animation = '1s ease 0s 1 slideOutToLeft'
        document.querySelector('.home__links').style.animation = '1s ease 0s 1 slideOutToRight'
        document.querySelector('.home__left-background').style.animation = '2.5s ease 0s 1 slideOutToLeft'
        document.querySelector('.home__right-background').style.animation = '2.5s ease 0s 1 slideOutToRight'
        setTimeout(()=>{
            history.replace(`/${e.target.name}`)
        },500)
    }

    return (
        <nav className='home'>
            <div className='home__left-background'></div>
            <div className='home__item-info'>
                <h3 className='home__item home__item-name'>Brent Arimoto</h3>
                <h6 className='home__item home__item-job-title'>Full Stack Software Engineer</h6>
            </div>
            <div className='home__right-background'></div>
            <div className='home__item home__links'>
                <NavLink activeClassName='home--active' className='home__item home__link home__link-home' exact to='/' name='/'>Home</NavLink>
                <NavLink activeClassName='home--active' className='home__item home__link home__link-about' to='/about' name='about' onClick={clickHandle}>About</NavLink>
                <NavLink activeClassName='home--active' className='home__item home__link home__link-professional' to='/professional' name='professional' onClick={clickHandle}>Professional</NavLink>
                <NavLink activeClassName='home--active' className='home__item home__link home__link-other-interests' to='/other-interests' name='other-interests' onClick={clickHandle}>Other Interests</NavLink>
                <NavLink activeClassName='home--active' className='home__item home__link home__link-contact' to='/contact' name='contact' onClick={clickHandle}>Contact</NavLink>
            </div>
        </nav>
  );
}

/*************** EXPORT ***************/
export default Home;