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


const whileCodeBlock = `while condición:
    print('bloque de código')
`;

const forCodeBlock = `for valor in secuencia:
    print('bloque de código')
`;

const dataTypes = [
    {
        title: 'While',
        content: (
        <>
            El bucle <code>While</code> es usado para repetir un bloque de código tantas veces como la condición especificada sea cierta.
             <br/>
             <br/>
            La sintaxis de <code>While</code> es:
            <CodeBlock
                text={
                    whileCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
        </>),
        frame: (// @ts-ignore
        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/While?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
    {
        title: 'For',
        content: (
        <>
            El bucle <code>For</code> es usado para iterar sobre una secuencia (lista, tuplas, strings) o cualquier objeto iterable. Iterar sobre una secuencia se le conoce como "recorrido"
            <br/>
            <br/>
            La sintaxis de <code>For</code> es:
            <CodeBlock
                text={
                    forCodeBlock
                }
                language={'python'}
                showLineNumbers
                wrapLines
                theme={dracula}
            />
            <br/>
            Donde <code>valor</code> es la variable que cambia de valor en cada iteración y <code>secuencia</code> el valor que estamos iterando
        </>),
        frame: (// @ts-ignore
        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/For?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        )
    },
]

const Class8Slide3 = () =>{
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0)
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            Los bucles (o ciclos) nos permite repetir código dentro de nuestro programa
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
        }

        li, b {
            color: #454545
        }
    }

`

export default Class8Slide3;
