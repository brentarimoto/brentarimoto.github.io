/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/

import {useAnimationContext} from '../../../context/AnimationContext'
import {professions} from '../../../data/professions'

/*************** COMPONENTS ***************/
function Education({profession}) {

    const {profFadeInAnimation} = useAnimationContext()

    return (
        <div className='main__professional-education' style={{animation: profFadeInAnimation}}>
            <img alt='' className='main__professional-education-image' src={`/img/${professions[profession].education_img}`}></img>
            <div className='main__professional-education-text'>
                <h3 className='main__professional-education-name'>{professions[profession].education}</h3>
                <h3 className='main__professional-education-degree'>{professions[profession].degree}</h3>
                <h3 className='main__professional-education-date'>{professions[profession].graduate}</h3>
            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Education;