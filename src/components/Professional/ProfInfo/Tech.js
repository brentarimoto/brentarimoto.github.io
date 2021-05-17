/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/

/*************** COMPONENTS ***************/
function Tech({tech, vals}) {

    return (
        <div className='main__professional-tech'>
            {vals ?
                <i className={vals[0]}></i> :
                <img className='main__professional-tech-icon' src={`/img/${tech}_Icon.png`} alt=''></img>
            }
            <p className='main__professional-tech-name'>{tech}</p>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Tech;