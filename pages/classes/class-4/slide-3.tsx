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
import { ColoredText } from 'UI/Button/Button';
import { CodeBlock, dracula } from "react-code-blocks";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";



const Class4Slide3 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='visible' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            ¿Qué son las variables?
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div  initial='visible' animate={controls} variants={variants} custom={1} transition={transition}>
                            <GlassCard>
                                <motion.div  initial='visible' animate={controls} variants={variants} custom={2} transition={transition}>
                                    <H3>
                                        En palabras simples, una variable es un elemento que tiene un nombre y contiene un valor.
                                        <br/>
                                        <br/>
                                        Piensa en una caja, una caja a la cual le pusiste de nombre, por decir, "juguetes" y guardas ahí el número de tu ex.
                                        <br/>
                                        <br/>
                                        <Box bg={'white'} width='fit-content' borderRadius={'10px'} p={2}>
                                            <ColoredText>
                                                <a href='https://www.programiz.com/python-programming/variables-constants-literals'>
                                                    Más info sobre las variables
                                                </a>
                                            </ColoredText>
                                        </Box>
                                    </H3>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                        {/* @ts-ignore */}
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Variables?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}



export default Class4Slide3;