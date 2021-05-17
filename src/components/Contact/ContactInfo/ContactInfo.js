/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/
import './ContactInfo.css'

/*************** COMPONENTS ***************/
function ContactInfo({website, contactAnimation}) {

    return (
        <div className='main__contact-info' style={{animation: contactAnimation}}>
            <a href={website.link} className='main__anchor-icon main__contact-icon'  target="_blank" rel="noreferrer">
                <div className='main__icon-background'></div>
                <img alt='' src={`/img/${website.icon}`} className='main__icon'></img>
            </a>
            <a href={website.link} className='main__contact-name'  target="_blank" rel="noreferrer">{website.name}</a>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default ContactInfo;