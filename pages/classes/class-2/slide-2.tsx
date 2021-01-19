import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H3, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";
import Button from "UI/Button/Button";
import { useState } from "react";

const codeExample = `
// Las fechas que queremos calcular la diferencia en días
var maldito13DeMarzo = new Date("03/13/2020");
var hoy = new Date();

// Calculamos su diferencia en tiempo
var diferencia = hoy.getTime() - maldito13DeMarzo.getTime();

// Calculamos sus diferencia en días
var diferenciaEnDias = diferencia / (1000 * 3600 * 24);
// Resultado
console.log(diferenciaEnDias)
`;

function calculateDifferenceBetweenDates() {
    var maldito13DeMarzo = new Date("03/13/2020");
    var hoy = new Date();

    // Calculamos su diferencia en tiempo
    var diferencia = hoy.getTime() - maldito13DeMarzo.getTime();

    // Calculamos sus diferencia en días
    var diferenciaEnDias = diferencia / (1000 * 3600 * 24);
    return diferenciaEnDias;
}

const Class2Slide2 = () => {
    const controls = useSlideAnimationControls();
    const [differenceInDays, setDifferenceInDays] = useState(null);
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            ¿Por qué programar?
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                            <GlassCard>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                                    <H3>
                                        La principal razón para que las personas aprendan lenguajes y técnicas de programación es utilizar la computadora como una herramienta para resolver problemas.
                                    </H3>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box pt={5}>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                            <CodeBlock
                                text={
                                    codeExample
                                }
                                language={'typescript'}
                                showLineNumbers
                                wrapLines
                                theme={dracula}
                            />
                        </motion.div>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between' py={3}>
                        <motion.div  initial='hidden' animate={differenceInDays ? 'visible' : ''} variants={variants} custom={4} transition={transition}>
                            <Box bg='white' py={2} px={5} color='rgba(45, 45, 45, 0.9)' borderRadius={5} >
                                <strong style={{ color: 'rgba(45, 45, 45, 0.9)' }}>Output:</strong> {differenceInDays}
                            </Box>
                        </motion.div>
                        {/* { differenceInDays &&
                        <motion.div  initial='hidden' animate='visible' variants={variants} custom={4} transition={transition}>
                            <Box bg='white' py={2} px={5} color='rgba(45, 45, 45, 0.9)' borderRadius={5} >
                                <strong style={{ color: 'rgba(45, 45, 45, 0.9)' }}>Output:</strong> {differenceInDays}
                            </Box>
                        </motion.div>} */}
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={4} transition={transition}>
                            <Button onClick={() => setDifferenceInDays(calculateDifferenceBetweenDates())}>
                                Ejecutar
                            </Button>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}



export default Class2Slide2;