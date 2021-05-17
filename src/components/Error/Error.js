/*************** REACT IMPORTS ***************/
import { useEffect, useState } from "react";

/*************** OTHER IMPORTS ***************/
import './Error.css'

/*************** COMPONENTS ***************/

function Error() {

    const message1 = `Whoops, we got a little lost. That wasn't supposed to happen...`
    const message2 = `Let's use the navbar to get back to a known page.`

    const [currMessage1, setCurrMessage1] = useState('')
    const [currMessage2, setCurrMessage2]  = useState('')

    useEffect(()=>{
        let timeout;
        if(currMessage1.length<message1.length && currMessage1!==message1){
            timeout = setTimeout(()=>{
                setCurrMessage1((prev)=>message1.slice(0,prev.length+1))
            },35)
        } else if(currMessage2.length<message2.length && currMessage2!==message2){
            timeout = setTimeout(()=>{
                setCurrMessage2((prev)=>message2.slice(0,prev.length+1))
            },35)
        }

        return ()=>clearTimeout(timeout)
    },[currMessage1, currMessage2, message1, message2])

    return (
        <div className='main__error-div'>
            <h2 className='main__error-message1'>Error 404: Page Not Found</h2>
            <div className='main__error-message1-div'>
            <h2 className='main__error-message1'>{currMessage1}</h2>
            </div>
            <div className='main__error-message2-div'>
                <h2 className='main__error-message2'>{currMessage2}</h2>
            </div>
        </div>
    );
}

/*************** EXPORT ***************/
export default Error;