/*************** REACT IMPORTS ***************/
import {useState} from 'react'


/*************** OTHER IMPORTS ***************/
import './Project.css'

/*************** COMPONENTS ***************/
function Project({project}) {
    const [imgType, setImgType] = useState('.png')
    const [hidden, setHidden] = useState(false)
    const [animation, setAnimation] = useState(null)
    // const [filter, setFilter] = useState('brightness(50%)')

    const image = (project.img.length) ? project.img+imgType : 'image-not-found.png'

    const mouseEnter=async(e)=>{
        if(image!=='image-not-found.png'){
            setAnimation('.5s ease 0s 1 slideOutToBottom')
            setTimeout(()=>{
                setImgType('.gif')
                setHidden(true)
            },100)
        }
    }

    const mouseLeave = (e)=>{
        if(image!=='image-not-found.png'){
            setTimeout(()=>{
                setAnimation('.5s ease 0s 1 slideInFromBottom')
                setImgType('.png')
                setHidden(false)
            },100)
        }
    }


    return (
        <>
            <img
                className='main__professional-project-image'
                name={image}
                src={`/img/${image}`}
                alt=''
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            ></img>
            <div className={`main__professional-project-info ${hidden ? 'main__professional--hidden' : ''}`} style={{animation:animation}}>
                <h2 className={`main__professional-project-title`}>{project.title}</h2>
                <h3 className={`main__professional-project-techs`}>{project.technologies}</h3>
            </div>
        </>
    );
  }

  /*************** EXPORT ***************/
  export default Project;