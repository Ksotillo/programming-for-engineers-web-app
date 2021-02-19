import { useState } from 'react';
import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1, H2  } from "UI/Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox, ColoredTextOnHover } from 'UI/Box/Box';
import { RoundedImageContainer } from 'UI/ImageContainer/RoundedImage'
import { RoundedImage } from 'UI/Image/Image'
import { GlassCard } from 'UI/Card/Card'
import Image from 'next/image';

const items = [
    {
        title: 'El problema',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Podemos tener un sólo tipo de dato en una variable pero ¿Qué pasa si queremos varios datos en una sola variable?
                </motion.h2>
                {/* <motion.h4 initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    
                </motion.h4> */}
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-9/una_variable.png'
                            width={223.5}
                            height={228}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
    {
        title: 'La solución',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Podemos usar estructuras de datos (como las listas) para poder almacenar varios datos
                </motion.h2>
                {/* <motion.h4 initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    Un programa es un conjunto de instrucciones que al ser ejecutadas logra un un objetivo.
                </motion.h4> */}
                <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={3} transition={transition}>
                    <Box display='flex' justifyContent='center' >
                        <Image
                            src='/images/class-9/una_lista.png'
                            width={226}
                            height={136}
                        />
                        <Image
                            src='/images/class-9/una_lista_distintos_datos.png'
                            width={226}
                            height={136}
                        />
                    </Box>
                </motion.div>
            </GlassCardContent>
        )
    },
]

const Class8Slide2 = () => {
    const controls = useSlideAnimationControls();
    const [itemSelected, setItemSelected] = useState(null);
    return (
        <Container >
            <Row>
                <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                    <H1 shadow fontSize={'3rem'}>
                        ¿Qué es una lista y por qué es una estructura de datos?
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
                    <motion.h4 layoutId='steps' style={{ position: 'absolute' }}>
                        {itemSelected?.title === 'La programación' && 'Una serie de pasos o instrucciones para dar solución a un problema'}
                    </motion.h4>
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



export default Class8Slide2;