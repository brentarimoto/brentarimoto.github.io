/*************** REACT IMPORTS ***************/
import { Link } from 'react-router-dom'
import {useAnimationContext} from '../../context/AnimationContext'

/*************** OTHER IMPORTS ***************/
import './About.css'

/*************** COMPONENTS ***************/
function About() {
  const { aboutAnimation } = useAnimationContext()

  const GeneralDescription = `I'm a software engineer living in the Bay Area, CA. I love creating and developing applications for all facets
  of life. As one who gets hyperfocused and/or obsessesed with projects and hobbies, I always put forward 110% into everything I do. `

  const BusinessDescription = `If you have any business queries or just want to say hello,
  feel free to use any information in the `

  return (
      <div className='main__about-div' style={{animation:aboutAnimation}}>
        <div className='main__about-item main__about-image-div'>
          <img className='main__about-item main__about-image' src={`/img/Headshot.jpg`} alt=''></img>
        </div>
        <div className='main__about-item main__about-description-div'>
          <h1 className='main__about-item main__about-title'> Hi, I'm Brent Arimoto </h1>
          <h3 className='main__about-item main__about-description'> {GeneralDescription} </h3>
          <h3 className='main__about-item main__about-description'> {BusinessDescription} {<Link to='/contact'>Contact</Link>} section to get in touch.</h3>
        </div>
      </div>
  );
}

/*************** EXPORT ***************/
export default About;