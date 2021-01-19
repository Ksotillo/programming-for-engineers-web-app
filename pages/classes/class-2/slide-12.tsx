import { useState } from 'react';
import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1, H2 } from "UI/Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box';
import { RoundedImageContainer } from 'UI/ImageContainer/RoundedImage'
import { RoundedImage } from 'UI/Image/Image'
import { GlassCard } from 'UI/Card/Card'
import Image from 'next/image';

const items = [
    {
        title: 'Comunicación',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Comunicación
                </motion.h2>
                <motion.h4 initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    Es muy importante que un programador pueda comunicarse, expresando bien sus ideas, ya que va a estar trabajando constantemente en equipopara dar solución a la problematica
                </motion.h4>
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-2/communicate.svg'
                            width={200}
                            height={300}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
    {
        title: 'Adaptación',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Adaptación
                </motion.h2>
                <motion.h4 initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    No enfrascarse en un solo lenguaje de programación o en un sólo framework de programación, sino estar constantemente adaptandose a las nuevas tecnologías y necesidades
                </motion.h4>
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-2/learning.svg'
                            width={200}
                            height={300}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
    {
        title: 'Documentación',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Documentación
                </motion.h2>
                <motion.h4 initial='hidden' animate='visible' layoutId='steps' variants={variants} exit='exits' custom={2} transition={transition}>
                    Una vez teniendo una solución a nuestro problema, tenemos que organizarnos, plantear nuestros algoritmos, diagramas o pseudocódigo necesario para lleva a cabo nuestra solución, de manera tal de que también quede un registro de como se está planteando y realizando dicha solución.
                </motion.h4>
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-2/documentation.svg'
                            width={200}
                            height={200}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
    {
        title: 'Sabes buscar en Google',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Sabes buscar en Google
                </motion.h2>
                <motion.p initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    Google salva la patria.
                </motion.p>
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-2/search.svg'
                            width={200}
                            height={200}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
]

const Class1Slide12 = () => {
    const controls = useSlideAnimationControls();
    const [itemSelected, setItemSelected] = useState(null);
    return (
        <Container >
            <Row>
                <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                    <H1 shadow fontSize={'3rem'}>
                        Algunas cosas más a tener en cuenta
                    </H1>
                </motion.div>
                <Col col={6}>
                    {items.map((item, index) => 
                        <motion.div initial='hidden' animate={controls} variants={variants} custom={index + 2} transition={transition}>
                            <WhiteBox tabIndex={ 0 } className={item === itemSelected ? 'selected' : ''} onClick={() => setItemSelected(item)} >
                                {/* onBlur={() => item === itemSelected ? setItemSelected(null) : ''} */}
                                <ColoredTextOnHover p={3}>
                                        {`${index + 1}. ${item.title}`}
                                </ColoredTextOnHover>
                            </WhiteBox>
                        </motion.div>
                    )}
                </Col>
                <Col col={6}>
                    <Box pt={3}>
                        <AnimatePresence>
                            {itemSelected &&
                            <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                                <GlassCard>
                                    <itemSelected.Component/>
                                </GlassCard>
                            </motion.div>}
                        </AnimatePresence>
                    </Box>
                </Col>
            </Row>

        </Container>
    )
}


const GlassCardContent = styled.div`
    // overflow: auto;
    max-height: 400px;
    padding: 1rem;
    h2 {
        text-align: center;
    }

`

const ColoredTextOnHover = styled(Box)`
    text-shadow: ${({ shadow, theme }) => shadow ? theme.textShadow : null};
    font-size: 1.5rem;
    font-weight: bold;

`


const WhiteBox = styled(Box)`
    width: fit-content;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
    font-weight: bold;
    margin: 1rem;
    cursor: pointer;
    outline: none;

    &:hover, &.selected {
        background-color: white;
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);

        ${ColoredTextOnHover} {
            background: linear-gradient(90deg, ${({ theme }) => theme.gradientColors.gradientColor1} 0%, ${({ theme }) => theme.gradientColors.gradientColor2} 33%, ${({ theme }) => theme.gradientColors.gradientColor3} 66%,  ${({ theme }) => theme.gradientColors.gradientColor4} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: GradientAnimator 7s ease infinite;
            background-size: 400% 400%;
        }
    }
`

//     background-color: #272c36;
const Modal = styled.div`
    position: fixed;
    overflow: auto;
    z-index: 1050;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .modal {
        display: block;
        overflow: visible;
        outline: 0;
        margin: 30px auto 0 auto;
        position: relative;
        width: auto;
        z-index: 1050;
        width: 600px;
    }

    .content {
        position: relative;
        background-color: #fff;
        border-radius: 6px;
        outline: 0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06);
        padding: 20px;
    }

    .header {
        padding-right: 20px;
    }

    .header-close {
        outline: 0;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 12px;
        line-height: 1.66666667;
        color: #575757;
        width: 20px;
        padding: 0 8px/2;
        background: none;
        border-style: none;
    }

    .body {
        position: relative;
        margin-top: 30px;
        padding-bottom: 30px;
    }

`

export default Class1Slide12;