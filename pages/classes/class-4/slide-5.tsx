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
            Números enteros positivos y negativos.
             <br/>
             <br/>
            Ejemplo:
            <ul>
                <li>10</li>
                <li>500000</li>
                <li>-100</li>
            </ul>
        </>)
    },
    {
        title: 'Números de punto flotante',
        content: (
            <>
                En palabras simples, son los números decimales. Se representan con el punto (.) y no con la coma (,)
                <br/>
                <br/>
                Ejemplo:
                <ul>
                    <li>3.14159</li>
                    <li>2.71828</li>
                    <li>-1.12</li>
                </ul>
            </>
        )
    },
    {
        title: 'Strings',
        content: (
            <>
                Es texto, aunque se le conoce como cadenas de caracteres (esta es la traducción de Strings). 
                Esto es porque un texto se encuentra formado por distintos caracteres, que se unen de manera ordenada (como una cadena),
                formando así, lo que conocemos como texto.
                <br/>
                <br/>
                Ejemplo:
                <ul>
                    <li>Programación para ingenieros</li>
                    <li>Mi mamá me mima</li>
                    <li>Brrrrrrrrr UAH</li>
                </ul>
            </>
        )
    },
    {
        title: 'Booleanos',
        content: (
            <>
                Es un tipo de dato que solo tiene dos valores posibles: Verdadero o Falso.
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
                            Tipos de datos: los primitivos
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
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Tipos-de-Datos?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

