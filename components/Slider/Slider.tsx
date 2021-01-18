import styled from 'styled-components';
import { useRouter } from 'next/router'

import { GlassIconButton } from 'UI/Button/GlassButton';

import { Text, H4, H1 } from "UI/Typography/Typography";
import { GoBackButton } from "UI/Button/GoBackButton";
import { motion } from 'framer-motion';
import { transition, variants } from 'utils/motionVariants';


interface SliderProps {
    children: JSX.Element;
    title: string;
    currentSlide: number;
    totalSlides: number;
    classNumber: number;
}

export const Slider = ({
    children,
    title,
    currentSlide,
    totalSlides,
    classNumber
}: SliderProps) =>{ 
    const router = useRouter();

    const formatToTwoDigits = (number: number) => number < 10 ? `0${number}` : number;

    const goToNextSlide = () => router.push(`/classes/class-${classNumber}/slide${currentSlide + 1}`)
    const goToPrevSlide = () => router.push(`/classes/class-${classNumber}/slide${currentSlide - 1}`)

    return (
        <Slide>
            <SlideHeader>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={0} transition={transition}>
                    <GoBackButton onClick={() => router.push('/')}  />
                </motion.div>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={1} transition={transition}>
                    <Text color='fainted'>
                        {title}
                    </Text>
                </motion.div>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={2} transition={transition}>
                    <H4 color='fainted' >
                        CLASE
                    </H4>
                    <H1 color='fainted' fontSize={'3.2rem'} mt={-3}>
                        {formatToTwoDigits(classNumber)}
                    </H1>
                </motion.div>
            </SlideHeader>
            {children}
            <SlideFooter>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={3} transition={transition}>
                    <GlassIconButton
                        name='chevronLeft'
                        title='Lámina previa'
                        style={{ opacity: currentSlide > 1 ? 1 : 0 }}
                        onClick={goToPrevSlide}
                    />
                </motion.div>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={4} transition={transition}>
                    <Text color='fainted'>{formatToTwoDigits(currentSlide)}/{totalSlides}</Text>
                </motion.div>
                <motion.div initial='hidden' animate='visible' variants={variants} custom={5} transition={transition}>
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