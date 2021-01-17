import { AppContext } from 'context/AppContext';
import { useContext, useEffect, useRef } from 'react'
import Gradient from './gradient';

const AnimatedGradient = () => {
    const { theme: { gradientColors }, setTheme } = useContext(AppContext);
    const { current: gradient } = useRef(new Gradient())
    const firstRun = useRef(true);

    useEffect(() => {
        //@ts-ignore
        gradient.initGradient("#gradient-canvas");
    }, [])
    useEffect(() => {
        // setTimeout(() => {
        //     setTheme(prevTheme => ({ ...prevTheme, gradientColors: { ...prevTheme.gradientColors, gradientColor1: '#FFFFFF' } }))
        //     console.log('Hi')
        // }, 5000);

    }, [])

    useEffect(() => {
        if (gradient && !firstRun.current) {
            console.log('Changing color...')
            gradient.connect()
        }
        firstRun.current = false
    }, Object.values(gradientColors))

    return (
        <canvas id="gradient-canvas" data-js-darken-top data-transition-in>
        </canvas>
    )
}

export default AnimatedGradient