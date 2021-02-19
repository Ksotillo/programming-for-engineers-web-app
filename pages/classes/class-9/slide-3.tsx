import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H4, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const listCodeBlock = `
# Lista con elementos en ella
mi_lista = [ 1, 'Hola', True, 45.4, "Prueba" ]
# Lista vacía
lista_vacía = []
`

const dataTypes = [
    {
        title: 'Listas',
        content: (
        <>
            Hay varias maneras de crear una lista, pero en general basta con la siguiente sintaxis:
            <br/>
            <br/>
            <CodeBlock
                text={
                    listCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
        </>)
    },
]

const Class9Slide3 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            Las listas (vectores, arreglos o Arrays) nos permiten guardar varios tipos de datos en una sola variable
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
                                            <H4>
                                                {dataTypes[currentType].content}
                                            </H4>
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
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Listas?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
        width: 100%;
        text-align: center;
        transform: none!important;
        box-shadow: none!important;
        border-bottom-right-radius: 0!important;
        border-bottom-left-radius: 0!important;

        ${ColoredTextOnHover} {
            font-size: 1rem!important;
        }

    }

    .definition-content {
        background-color: white;
        border-bottom-right-radius: 10px!important;
        border-bottom-left-radius: 10px!important;
        font-size: 1rem;
        
        ${H4}, code {
            color: #1a4551!important;
        }

        ul {
            padding-left: 1rem;
        }

        li, b {
            color: #454545
        }
    }

`

export default Class9Slide3;
