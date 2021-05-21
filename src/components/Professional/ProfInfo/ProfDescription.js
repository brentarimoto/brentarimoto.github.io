/*************** REACT IMPORTS ***************/


/*************** OTHER IMPORTS ***************/
import ProfDescriptionBlock from './ProfDescriptionBlock'
import {projects} from '../../../data/projects'
import {professions} from '../../../data/professions'


/*************** COMPONENTS ***************/
function ProfDescription({profession}) {

    const descriptions = profession==='software' ? projects : professions.mechanical.experience

    return (
        <div className='main__professional-desciption-div'>
            {descriptions?.map((project, i)=>(
                <ProfDescriptionBlock key= {project.title} project={project} i={i}/>
            ))}
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfDescription;