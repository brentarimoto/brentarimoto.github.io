/*************** REACT IMPORTS ***************/


/*************** OTHER IMPORTS ***************/
import {professions} from '../../data/professions'

/*************** COMPONENTS ***************/
function ProfTab({profession, setProfession, field}) {

    const job = professions[field]

    const current = (profession === field) ? 'main__professional--current' : ''

    const professionChange = ()=>{
        setProfession(field)
    }

    return (
        <div className={`main__professional-tab ${current}`} name={field} onClick={(e)=>professionChange()}>
            <h2>{job.name}</h2>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfTab;