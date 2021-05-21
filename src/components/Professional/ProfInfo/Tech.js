/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/

import {useAnimationContext} from '../../../context/AnimationContext'

/*************** COMPONENTS ***************/
function Tech({tech, vals}) {

    const {profFadeInAnimation} = useAnimationContext()

    return (
        <div className='main__professional-tech' style={{animation: profFadeInAnimation}}>
            {vals ?
                <i className={vals[0]}></i> :
                <img className='main__professional-tech-icon' src={`/img/${tech}_Icon.png`} alt=''></img>
            }
            <p className='main__professional-tech-name'>{tech}</p>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Tech;