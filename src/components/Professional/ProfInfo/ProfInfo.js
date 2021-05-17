/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/
import ProfDescription from './ProfDescription'
import Technologies from './Technologies'
import Education from './Education'

import {useAnimationContext} from '../../../context/AnimationContext'

/*************** COMPONENTS ***************/
function ProfInfo({profession, setProfession}) {
    const { profInfoAnimation } = useAnimationContext()

    return (
        <div className='main__professional-info' style={{animation: profInfoAnimation}}>
            <div className='main__professional-technologies-div'>
                <Technologies profession={profession}/>
            </div>
            <div className='main__professional-description-div'>
                <ProfDescription profession={profession}/>
            </div>
            <div className='main__professional-education-div'>
                <Education />
            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfInfo;