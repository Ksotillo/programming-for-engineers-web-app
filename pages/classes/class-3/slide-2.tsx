import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H3, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";


const Class3Slide2 = () => {
    const controls = useSlideAnimationControls();
    const [showOutput, setShowOutput] = useState(true);
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            ¿Qué son las entradas y salidas en Python?
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                            <GlassCardForTabs>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                                    <Box display='flex' justifyContent='space-around' >
                                        <WhiteBox className={showOutput ? 'selected' : ''} onClick={() => setShowOutput(true)} >
                                            <ColoredTextOnHover py={3} px={4}>
                                                Salidas
                                            </ColoredTextOnHover>
                                        </WhiteBox>
                                        <WhiteBox className={!showOutput ? 'selected' : ''} onClick={() => setShowOutput(false)} >
                                            <ColoredTextOnHover py={3} px={4}>
                                                Entradas
                                            </ColoredTextOnHover>
                                        </WhiteBox>
                                    </Box>
                                    <Box className='definition-content' p={4}>
                                        {showOutput && <motion.div  initial='hidden' animate={'visible'} variants={variants} custom={2} transition={transition}>
                                            <H3>
                                                Las salidas (Outputs) nos permiten mostrar datos o información en la pantalla de nuestro dispositivo, también se puede tener outputs a archivos, otros dispositivos (IoT), entre otros. Una forma de lograr un output es usando el comando <code>print()</code>
                                            </H3>
                                        </motion.div>}
                                        {!showOutput && <motion.div  initial='hidden' animate={'visible'} variants={variants} custom={2} transition={transition}>
                                            <H3>
                                                Las entradas (Inputs) nos permiten ingresar datos o información a nuestro programa, esto se puede hacer de diversas maneras, sin embargo, una forma de lograrlo es usando el comando <code>input()</code>
                                            </H3>
                                        </motion.div>}
                                    </Box>
                                </motion.div>
                            </GlassCardForTabs>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' py={3}>
                        {/* @ts-ignore */}
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Inputs-and-Outputs?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

        &:first-child {
            border-top-right-radius: 0!important;
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
    }

`

export default Class3Slide2;

