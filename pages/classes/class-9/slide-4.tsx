import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H4, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";

const dataTypes = [
    {
        title: 'Manejo de listas',
        content: (
        <>
            Para poder agregar o eliminar elementos:
            <br/>
            <br/>
            <ul>
                <li>
                    <b>append() :</b> Añade un elemento al final de la lista
                </li>
                <li>
                    <b>extend() :</b> Añade todos los elementos de una lista a otra lista
                </li>
                <li>
                    <b>insert() :</b> Inserta un elemento en el índice definido
                </li>
                <li>
                    <b>remove() :</b> Elimina un elemento de la lista
                </li>
                <li>
                    <b>pop() :</b> Elimina un elemento de la lista y devuelve el elemento eliminado
                </li>
                <li>
                    <b>clear() :</b> Elimina todos los elementos de la lista
                </li>
            </ul>
        </>),
        frame: (// @ts-ignore
            <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Manejo-de-listas?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
    {
        title: 'Utilidades',
        content: (
         <>
            Utilidades varias que nos permiten manipular o tener cierta información del contenido de una lista
            <br/>
            <br/>
            <ul>
                <li>
                    <b>index() :</b> Devuelve el indice del primer elemento que coincida con el especificado
                </li>
                <li>
                    <b>count() :</b> Devuelve la cantidad de veces que el elemento especificado se repite en una lista
                </li>
                <li>
                    <b>sort() :</b> Ordena los elementos de una lista en orden ascendente
                </li>
                <li>
                    <b>reverse() :</b> Invierte el orden de los elementos en una lista
                </li>
                <li>
                    <b>copy() :</b> Devuelve una copia de la lista
                </li>
            </ul>
        </>),
        frame: (// @ts-ignore
            <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Utilidades-de-Listas?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
]

const Class9Slide4 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H2 shadow>
                            Existen varios comandos (funciones mejor dicho) que nos permiten manipular nuestras listas
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

export default Class9Slide4;
