import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H3, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";


const dataTypes = [
    {
        title: 'Números Enteros',
        content: (
        <>
            Se puede obtener un número entero tomando el valor que se quiere convertir y meterlo dentro de los parentesis de <code>int()</code>
        </>)
    },
    {
        title: 'Números de punto flotante',
        content: (
            <>
                Se puede obtener un número decimal tomando el valor que se quiere convertir y meterlo dentro de los parentesis de <code>float()</code>
            </>
        )
    },
    {
        title: 'Strings',
        content: (
            <>
                Se puede obtener una cadena de texto tomando el valor que se quiere convertir y meterlo dentro de los parentesis de <code>str()</code>
            </>
        )
    },
    {
        title: 'Booleanos',
        content: (
            <>
                Se puede obtener un valor booleano tomando el valor que se quiere convertir y meterlo dentro de los parentesis de <code>bool()</code>
            </>
        )
    },
]

const Class4Slide5 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            Conversión de un dato a un tipo diferente
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                            <GlassCardForTabs>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                                    <Box display='flex' justifyContent='space-around' >
                                        {dataTypes.map((item, index) =>
                                        <WhiteBox className={currentType === index ? 'selected' : ''} onClick={() => setCurrentType(index)} >
                                            <ColoredTextOnHover py={3} px={4}>
                                                {item.title}
                                            </ColoredTextOnHover>
                                        </WhiteBox>
                                        )}
                                    </Box>
                                    <Box className='definition-content' p={4}>
                                        <motion.div  initial='hidden' animate={'visible'} variants={variants} custom={2} transition={transition}>
                                            <H3>
                                                {dataTypes[currentType].content}
                                            </H3>
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            </GlassCardForTabs>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' py={3}>
                        {/* @ts-ignore */}
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Conversion-de-Datos?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

const GlassCardForTabs = styled(GlassCard)`
    padding: 0!important;

    ${WhiteBox} {
        margin: 0;
        width: 50%;
        text-align: center;
        transform: none!important;
        box-shadow: none!important;
        border-bottom-right-radius: 0!important;
        border-bottom-left-radius: 0!important;

        ${ColoredTextOnHover} {
            font-size: .85rem!important;
        }

        &:first-child {
            border-top-right-radius: 0!important;
        }
        &:not(:first-child), :not(:first-child) {
            border-top-right-radius: 0!important;
            border-top-left-radius: 0!important;
        }
        &:last-child {
            border-top-left-radius: 0!important;
        }
    }

    .definition-content {
        background-color: white;
        border-bottom-right-radius: 10px!important;
        border-bottom-left-radius: 10px!important;
        
        ${H3}, code {
            color: #1a4551!important;
        }

        li {
            color: #454545
        }
    }

`

export default Class4Slide5;

