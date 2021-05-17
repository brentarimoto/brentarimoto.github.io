/*************** REACT IMPORTS ***************/
import {useState} from 'react'

/*************** OTHER IMPORTS ***************/
import ProfTab from './ProfTab'
import ProfInfo from './ProfInfo/ProfInfo'
import Project from './Project/Project'

import {useAnimationContext} from '../../context/AnimationContext'
import {projects} from '../../data/projects'
import './Professional.css'


/*************** COMPONENTS ***************/
function Professional() {
    const {profSummaryAnimation, profProjectsAnimation} = useAnimationContext()
    const { profInfoAnimation } = useAnimationContext()
    const [profession, setProfession] = useState('software')
    const options = ['software', 'mechanical']

    return (
        <div className='main__professional'>
            <div className='main__professional-projects-div' style={{animation:profProjectsAnimation}}>
                <h2 className='main__professional-projects-header'>Full Stack Projects</h2>
                <div className='main__professional-projects'>
                    {projects.map((project, i)=>(
                        <a
                            className='main__professional-project-div'
                            key={project.title}
                            style={{animation:`${i/3+1}s ease 0s 1 scaleUp`}}
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Project project={project}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className='main__professional-tab-div' style={{animation: profInfoAnimation}}>
                {options.map((field, i)=>(
                    <ProfTab profession={profession} setProfession={setProfession} field={field} key={field}/>
                ))}
            </div>
            <ProfInfo profession={profession} setProfession={setProfession}/>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Professional;