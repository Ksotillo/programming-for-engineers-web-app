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
import { RoundedImage } from "UI/Image/Image";
import { ColoredText } from 'UI/Button/Button';
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";


const customVariants = {
    visible: variants.visible,
    hidden: variants.hidden
}

const Class4Slide2 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={customVariants} custom={0} transition={transition}>
                        <H1 shadow>
                            ¿Qué son las variables?
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div  initial='hidden' animate={controls} variants={customVariants} custom={1} transition={transition}>
                            <GlassCard>
                                <motion.div  initial='hidden' animate={controls} variants={customVariants} custom={2} transition={transition}>
                                    <H3>
                                        En palabras simples, una variable es un elemento que tiene un nombre y contiene un valor.
                                        <br/>
                                        <br/>
                                        Piensa en una caja, una caja a la cual le pusiste de nombre, por decir, "juguetes" y guardas ahí el número de tu ex.
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
                    <Box display='flex' justifyContent='flex-end'>
                        <motion.div initial='hidden' animate={controls} variants={variants} exit='exits' custom={3} transition={transition}>
                            <RoundedImageContainer>
                                <RoundedImage
                                    src={'/images/class-4/box.jpg'}
                                    width={420}
                                    height={420}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}



export default Class4Slide2;