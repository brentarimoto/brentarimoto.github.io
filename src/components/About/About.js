/*************** REACT IMPORTS ***************/
import { Link } from 'react-router-dom'
import {useAnimationContext} from '../../context/AnimationContext'

/*************** OTHER IMPORTS ***************/
import './About.css'

/*************** COMPONENTS ***************/
function About() {
  const { aboutAnimation } = useAnimationContext()

  const GeneralDescription = `As a mechanical engineer turned software engineer, I've always been interested in building and understanding how things work.
  Software development, specifically, lets you explore designs on a whole new level. Solving puzzles, and creating those intricate systems has and always will be fun for me.
  Now, I just have the opportunity pursue it as a career.`

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