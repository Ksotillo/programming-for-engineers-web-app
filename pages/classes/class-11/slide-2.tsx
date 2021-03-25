import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H4, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const dictCodeBlock = `
# Diccionario vacio
mi_diccionario = {}
# Usando dict
mi_diccionario = dict()
# Diccionario con llaves que son numeros
mi_diccionario = {1: 'apple', 2: 'ball'}
# Diccionario con llaves mixtas entre string y numeros
mi_diccionario = {'name': 'John', 1: [2, 4, 3]}
`

const dataTypes = [
    {
        title: 'Diccionarios',
        content: (
        <>
            Hay varias maneras de crear un diccionario, pero en general basta con la siguiente sintaxis:
            <br/>
            <br/>
            <CodeBlock
                text={
                    dictCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
        </>),
        frame: (// @ts-ignore
            <iframe height="500px" width="100%" src="https://replit.com/@Ksotillo/Diccionarios?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
    {
        title: 'Manejo de diccionarios',
        content: (
         <>
            Utilidades varias que nos permiten manipular o tener cierta información del contenido de una lista
            <br/>
            <br/>
            <ul>
                <li>
                    <b>clear() :</b> Elimina todos los elementos del diccionario
                </li>
                <li>
                    <b>copy() :</b> Devuelve una copia del diccionario
                </li>
                <li>
                    <b>get() :</b> Devuelve el valor de una llave en el diccionario
                </li>
                <li>
                    <b>pop() :</b> Remueve una llave del diccionario
                </li>
                <li>
                    <b>keys() :</b> Retorna una lista con todas las llaves del diccionario
                </li>
                <li>
                    <b>values() :</b> Retorna una lista con todos los valores del diccionario
                </li>
                <li>
                    <b>items() :</b> Retorna una lista con todas las llaves y valores del diccionario en forma (key, value)
                </li>
            </ul>
        </>),
        frame: (// @ts-ignore
            <iframe height="500px" width="100%" src="https://replit.com/@Ksotillo/Manejo-de-Diccionarios?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
]

const Class11Slide2 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H2 shadow>
                            Al igual que las listas, los diccionarios nos permiten guardar distintos datos en una sola variable
                        </H2>
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
                        {dataTypes[currentType].frame}
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
            font-size: 1rem!important;
        }

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
        font-size: 1rem;
        
        ${H4}, code {
            color: #1a4551!important;
        }

        ul {
            padding-left: 1rem;
            list-style: '👉  ';
        }

        li, b {
            color: #454545
        }
    }

`

export default Class11Slide2;
