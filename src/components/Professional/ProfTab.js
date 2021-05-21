/*************** REACT IMPORTS ***************/


/*************** OTHER IMPORTS ***************/
import {professions} from '../../data/professions'

import {useAnimationContext} from '../../context/AnimationContext'

/*************** COMPONENTS ***************/
function ProfTab({profession, setProfession, field}) {

    const {profFadeInAnimation} = useAnimationContext()

    const job = professions[field]

    const current = (profession === field) ? 'main__professional--current' : ''

    const professionChange = ()=>{
        setProfession(field)
    }

    return (
        <div className={`main__professional-tab ${current}`} name={field} onClick={(e)=>professionChange()} style={{animation: profFadeInAnimation}}>
            <h2>{job.name}</h2>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfTab;