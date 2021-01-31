import styled from 'styled-components';
import { useRouter } from 'next/router'

import { GlassIconButton } from 'UI/Button/GlassButton';

import { Text, H4, H1 } from "UI/Typography/Typography";
import { GoBackButton } from "UI/Button/GoBackButton";
import { motion, useAnimation } from 'framer-motion';
import { transition, variants } from 'utils/motionVariants';
import { useContext, useEffect } from 'react';
import { LEFT_ARROW_KEY, RIGHT_ARROW_KEY } from 'utils/keyCodes';
import { AppContext } from 'context/AppContext';


interface SliderProps {
    children: JSX.Element;
    title: string;
    currentSlide: number;
    totalSlides: number;
    classNumber: number;
    colors: {
        gradientColor1: string;
        gradientColor2: string;
        gradientColor3: string;
        gradientColor4: string;
    }
}

export const Slider = ({
    children,
    title,
    currentSlide,
    totalSlides,
    classNumber,
    colors
}: SliderProps) =>{ 
    const router = useRouter();
    const controls = useAnimation();
    const { controls: slidesControl, setTheme } = useContext(AppContext)

    const formatToTwoDigits = (number: number) => number < 10 ? `0${number}` : number;

    const goBack = async () => {
        await controls.start('exits')
        router.push('/')
    }

    const getCurrentSlide = () => {
        const pathArray = location.pathname.split('/');
        const currentSlideValue = pathArray[pathArray.length - 1].split('-')[1]
        const currentSlide = +currentSlideValue;
        return currentSlide;
    }

    const goToNextSlide = async () => {
        if (getCurrentSlide() < totalSlides) {
            await slidesControl.start('exits')
            router.push(`/classes/class-${classNumber}/slide-${getCurrentSlide() + 1}`)
        }
    }
    const goToPrevSlide = async () => {
        if (getCurrentSlide() > 1) {
            await slidesControl.start('exits')
            router.push(`/classes/class-${classNumber}/slide-${getCurrentSlide() - 1}`)
        }
    }

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case LEFT_ARROW_KEY:
                goToPrevSlide();
                break;
            case RIGHT_ARROW_KEY:
                goToNextSlide();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        controls.start('visible')
        if (colors) {
            setTheme(prevTheme => ({
                ...prevTheme,
                gradientColors: {
                    ...colors
                }
            }))
        }
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <Slide>
            <SlideHeader>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                    <GoBackButton onClick={goBack}  />
                </motion.div>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                    <Text color='fainted'>
                        {title}
                    </Text>
                </motion.div>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                    <H4 color='fainted' >
                        CLASE
                    </H4>
                    <H1 color='fainted' fontSize={'3.2rem'} mt={-3}>
                        {formatToTwoDigits(classNumber)}
                    </H1>
                </motion.div>
            </SlideHeader>
            <motion.div initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                {children}
            </motion.div>
            <SlideFooter>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                    <GlassIconButton
                        name='chevronLeft'
                        title='Lámina previa'
                        style={{ opacity: currentSlide > 1 ? 1 : 0 }}
                        onClick={goToPrevSlide}
                    />
                </motion.div>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={4} transition={transition}>
                    <Text color='fainted'>{formatToTwoDigits(currentSlide)}/{formatToTwoDigits(totalSlides)}</Text>
                </motion.div>
                <motion.div initial='hidden' animate={controls} variants={variants} custom={5} transition={transition}>
                    <GlassIconButton
                        name='chevronRight'
                        title='Siguiente lámina'
                        style={{ opacity: currentSlide !== totalSlides ? 1 : 0 }}
                        onClick={goToNextSlide}
                    />
                </motion.div>
            </SlideFooter>
        </Slide>
    )
}

const SlideHeader = styled.div`
    padding: 1.5rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const SlideFooter = styled.div`
    position: absolute;
    bottom: 0;
    padding: 1.5rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Slide = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`