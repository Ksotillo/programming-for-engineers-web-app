import { Container, Row } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";

const Class5Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                    <Title>
                        Python: <br/> Precedencia de Operadores
                    </Title>
                </motion.div>
            </Row>
        </Container>
    )
}

const Title = styled.h1`
    font-size: 7rem;
    text-shadow: ${props => props.theme.textShadow};
    text-align: center;
`


export default Class5Slide1;