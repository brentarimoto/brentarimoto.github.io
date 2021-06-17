/*************** REACT IMPORTS ***************/
import {useState} from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/*************** OTHER IMPORTS ***************/
import ProfTab from './ProfTab'
import ProfInfo from './ProfInfo/ProfInfo'
import Project from './Project/Project'

import {useAnimationContext} from '../../context/AnimationContext'
import {projects} from '../../data/projects'
import {contactMe} from '../../data/contactMeInfo'

import './Professional.css'
import 'swiper/swiper-bundle.css';

/*************** COMPONENTS ***************/
SwiperCore.use([Navigation, Pagination, Scrollbar])

function Professional() {

    const {profSummaryAnimation, profProjectsAnimation} = useAnimationContext()

    const [profession, setProfession] = useState('software')
    const options = ['software', 'mechanical']

    return (
        <div className='main__professional'>
            <div className='main__professional-projects-div' style={{animation:profProjectsAnimation}}>
                <Swiper
                breakpoints={{1000:{slidesPerView: 2}}}
                className='main__professional-projects'
                style = {{width: '100%', height: '100%'}}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
                >
                {projects.map((project, i)=>(
                    <SwiperSlide key={project.title} className='main__professional-project-container'>
                        <Project project={project} i={i}/>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className='main__professional-tab-div'>
                {options.map((field, i)=>(
                    <ProfTab profession={profession} setProfession={setProfession} field={field} key={field}/>
                ))}
            </div>
            <div className='main__professional-links'>
                {contactMe.map((website) => {
                    if (website.name !=='Youtube'){
                        return (<a key = {website.link} href={website.link} className='main__anchor-icon main__professional-icon'  target="_blank" rel="noreferrer" style={{animation: profSummaryAnimation}}>
                            <div className='main__icon-background'></div>
                            <img alt='' src={`/img/${website.icon}`} className='main__icon'></img>
                        </a>)
                    }
                })}
            </div>
            <ProfInfo profession={profession} setProfession={setProfession}/>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Professional;