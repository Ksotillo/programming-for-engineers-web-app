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

const functionsCodeBlock = `
# Declaración de una función
def nombre_de_la_funcion(parametros):
	""" Esta funcion retorna la suma de 2 + 2 """
    suma = 2 + 2
    return suma # Opcional
`

const argumentsCodeBlock = `
# Declaración de una función
def saludo(nombre, mensaje):
	""" Esta funcion retorna la suma de 2 + 2 """
    print("Hola", nombre + ", " + mensaje)

saludo("Kevin", "¿Qué tal?")
`

const dataTypes = [
    {
        title: 'Funciones',
        content: (
        <>
            Para definir una función se sigue la siguiente sintaxis:
            <br/>
            <br/>
            <CodeBlock
                text={
                    functionsCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
        </>)
    },
    {
        title: 'Argumentos de las funciones',
        content: (
        <>
            Los valores y variables que pasamos entre los parentesis son los argumentos
            <br/>
            <br/>
            <CodeBlock
                text={
                    argumentsCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
        </>)
    },
]

const Class10Slide2 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            Una función es un grupo de instrucciones relacionadas que ejecutan una tarea especifica
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
                        <iframe height="500px" width="100%" src="https://replit.com/@Ksotillo/Funciones?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
        }

        li, b {
            color: #454545
        }
    }

`

export default Class10Slide2;
