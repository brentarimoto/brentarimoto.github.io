/*************** REACT IMPORTS ***************/
import {useEffect, useState} from 'react'


/*************** OTHER IMPORTS ***************/
import './Project.css'

/*************** COMPONENTS ***************/
function Project({project, i}) {
    const [img, setImg] = useState('/img/image-not-found.png')
    const [hidden, setHidden] = useState(false)
    const [animation, setAnimation] = useState(null)

    useEffect(()=>{
        if (project.img){
            setImg(project.img)
        }
    },[])

    const mouseEnter=async(e)=>{
        if(img!=='/img/image-not-found.png'){
            setAnimation('.5s ease 0s 1 slideOutToBottom')
            setTimeout(()=>{
                setImg(project.gif)
                setHidden(true)
            },100)
        }
    }

    const mouseLeave = (e)=>{
        if(img!=='image-not-found.png'){
            setTimeout(()=>{
                setAnimation('.5s ease 0s 1 slideInFromBottom')
                setImg(project.img)
                setHidden(false)
            },100)
        }
    }




    return (
        <div
            className='main__professional-project-div'
            style={{animation:`${i/3+1}s ease 0s 1 scaleUp`}}
        >
            <a
            className='main__professional-project-anchor'
            style={{animation:`${i/3+1}s ease 0s 1 scaleUp`}}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            >
                <img
                    className='main__professional-project-image'
                    name={img}
                    src={img}
                    alt=''
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                ></img>
            </a>
            <div className={`main__professional-project-info ${hidden ? 'main__professional--hidden' : ''}`} style={{animation:animation}}>
                <h2 className={`main__professional-project-title`}>{project.title}</h2>
                <h3 className={`main__professional-project-techs`}>{project.technologies}</h3>
            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Project;