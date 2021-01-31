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

const operators = [
    'Parentesis',
    'Exponentes (**)',
    'Multiplicación (*), División(/), División Entera(//) y Módulo (%)',
    'Suma (+) y Resta (-)'
]

const Class5Slide2 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow>
                            El orden de precedencia de ejecución de los operadores aritméticos es:
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        {operators.map((item, index) =>
                        <motion.div key={index} initial='hidden' animate={controls} variants={variants} custom={1+ index} transition={transition}>
                            <WhiteBox width='fit-content' borderRadius={'10px'} p={3} my={4}>
                                <ColoredText>
                                   <H3>{index + 1} - {item}</H3>
                                </ColoredText>
                            </WhiteBox>
                        </motion.div>)}
                    </Box>
                </Col>
                <Col col={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                        {/* @ts-ignore */}
                        <iframe height="500px" width="100%" src="https://repl.it/@Ksotillo/Presedencia-de-Operadores?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

const WhiteBox = styled(Box)`
    background-color: white;
    transition: ${props => props.theme.transition};
    &:hover{
        transition: ${props => props.theme.transition};
        transform: scale(1.05);
    }
`


export default Class5Slide2;