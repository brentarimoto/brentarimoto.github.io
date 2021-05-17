/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/
import Tech from './Tech'

import {tech} from '../../../data/tech'

/*************** COMPONENTS ***************/
function Technologies({profession}) {
    const techs = tech[profession]
    console.log(techs)
    return (
        <div className='main__professional-technologies'>
            {Object.entries(techs).map(([tech, vals])=>(
                <Tech tech={tech} vals={vals}/>
            ))}
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Technologies;