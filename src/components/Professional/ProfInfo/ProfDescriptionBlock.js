/*************** REACT IMPORTS ***************/


/*************** OTHER IMPORTS ***************/

import {useAnimationContext} from '../../../context/AnimationContext'

/*************** COMPONENTS ***************/


function ProfDescriptionBlock({project, i}) {

    const {profLeftInAnimation, profRightInAnimation} = useAnimationContext()

    return (
        <div className='main__professional-description' style={{animation: i%2===0 ? profLeftInAnimation : profRightInAnimation}}>
            { i%2===0 &&
                <img className='main__professional-description-image'
                    src={project.img}
                    alt=''
                ></img>
            }
            <div className='main__professional-description-text-div'>
                <div className='main__professional-description-text-header'>
                    <a className='main__professional-description-text-title' href={project.href} target="_blank" rel='noopener noreferrer'>
                        <h3 className='main__professional-description-text-title'>{`${project.title}`}</h3>
                    </a>
                    |
                    {project && (<a className='main__professional-description-text-repo' href={project.github} target="_blank" rel="noopener noreferrer"><h3>(Github Repo)</h3></a>)}
                </div>
                <h3 className='main__professional-description-text-extra'>{project.technologies ? `${project.technologies}` : `${project.position}`}</h3>
                {project.summary &&
                <div className='main__professional-description-text-summary-div'>
                    <h3 className='main__professional-description-text-summary'>{project.summary}</h3>
                </div>}
                {project.description?.map((sentence)=>(
                    <li key={sentence} className='main__professional-description-text'>{sentence}</li>
                ))}
            </div>
            { i%2!==0 &&
                <img className='main__professional-description-image'
                    src={project.img}
                    alt=''
                ></img>
            }
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ProfDescriptionBlock;