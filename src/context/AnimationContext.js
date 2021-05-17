import { createContext, useContext, useState } from 'react';

export const AnimationContext = createContext()

export const useAnimationContext = () => useContext(AnimationContext)

export default function AnimationProvider({children}){

    const [navBarAnimation, setNavBarAnimation] = useState('1s ease 0s 1 slideInFromTop');
    const [aboutAnimation, setAboutAnimation] = useState('');
    const [profSummaryAnimation, setProfSummaryAnimation] = useState('1s ease 0s 1 scaleUp');
    const [profInfoAnimation, setProfInfoAnimation] = useState('1s ease 0s 1 slideInFromTop');
    const [profProjectsAnimation, setProfProjectsAnimation] = useState('');
    const [otherInterestsAnimation, setOtherInterestsAnimation] = useState('');
    const [contactAnimation, setContactAnimation] = useState('1s ease 0s 1 scaleUp');
    const [overflow, setOverflow] = useState('auto')

    const obj ={
        navBarAnimation, setNavBarAnimation,
        aboutAnimation, setAboutAnimation,
        profSummaryAnimation, setProfSummaryAnimation,
        profInfoAnimation, setProfInfoAnimation,
        profProjectsAnimation, setProfProjectsAnimation,
        otherInterestsAnimation, setOtherInterestsAnimation,
        contactAnimation, setContactAnimation,
        overflow, setOverflow,
    }

    return (
        <AnimationContext.Provider value={obj}>
            {children}
        </AnimationContext.Provider>
    )
}