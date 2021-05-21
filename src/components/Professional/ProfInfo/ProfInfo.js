/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/
import ProfDescription from './ProfDescription'
import Technologies from './Technologies'
import Education from './Education'


/*************** COMPONENTS ***************/
function ProfInfo({profession}) {

    return (
        <div className='main__professional-info'>
            <div className='main__professional-technologies-div'>
                <Technologies profession={profession}/>
            </div>
            <ProfDescription profession={profession}/>
            <div className='main__professional-education-div'>
                <Education profession={profession}/>
            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfInfo;