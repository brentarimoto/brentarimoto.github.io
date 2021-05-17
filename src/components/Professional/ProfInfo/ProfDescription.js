/*************** REACT IMPORTS ***************/


/*************** OTHER IMPORTS ***************/
import {professions} from '../../../data/professions'


/*************** COMPONENTS ***************/
function ProfInfo({profession}) {

    const job = professions[profession]

    return (
        <div className='main__professional-desciption'>
            <h2 className='main__professional-description-header'>Experience:</h2>
            <div className='main__professional-description-experiences'>
                <h4 className='main__professional-description-experience-company'>{job.experience.company} | {job.experience.title && job.experience.title}</h4>
                {job.experience.descriptions.map((description)=>(
                    <li className='main__professional-description-experience-description' key={description}>{description}</li>
                ))}

            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfInfo;