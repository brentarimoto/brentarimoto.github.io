/*************** REACT IMPORTS ***************/

/*************** OTHER IMPORTS ***************/
import ContactInfo from './ContactInfo/ContactInfo'

import {useAnimationContext} from '../../context/AnimationContext'
import {contactMe} from '../../data/contactMeInfo'
import './Contact.css'

/*************** COMPONENTS ***************/
function Contact() {
    const {contactAnimation} = useAnimationContext()
    return (
        <div className='main__contact-div'>
            <h2 className='main__contact-email' style={{animation: contactAnimation}}><a href="mailto: brentarimoto@gmail.com">brentarimoto@gmail.com</a></h2>
            <div className='main__contact'>
                {contactMe.map((website)=>(
                    <ContactInfo key={website.link} website={website} contactAnimation={contactAnimation}/>
                ))}
            </div>
        </div>
    );
  }

  /*************** EXPORT ***************/
  export default Contact;