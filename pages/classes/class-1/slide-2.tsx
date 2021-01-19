import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1 } from "UI/Typography/Typography";
import Image from 'next/image'
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { ColoredText } from 'UI/Button/Button';
import { Box } from 'UI/Box/Box';
import { RoundedImageContainer } from 'UI/ImageContainer/RoundedImage'
import { RoundedImage } from 'UI/Image/Image'

const Class1Slide2 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={6} xs={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                        <RoundedImageContainer>
                            <RoundedImage
                                src="/images/class-1/me.jpeg"
                                alt="Kevin Sotillo"
                                width={250}
                                height={250}
                                quality={100}
                            />
                        </RoundedImageContainer>
                    </motion.div>
                </Col>
                <Col col={6} xs={6}>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <Title>¡Hola!</Title>
                    </motion.div>
                    <GlassCard>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                            Me llamo Kevin Sotillo. Soy egresado de la Universidad Metropolitana como Ingeniero en Sistemas, trabajo como profesor
                            tiempo parcial en el departamento de Gestión de Proyectos y Sistemas. Además trabajo como desarrollador en 3VAM y Aether Solutions.
                            <br/>
                            <br/>
                            Puedes contactarme a través de: 
                        </motion.div>
                        <motion.div  initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                            <WhiteBox p={2}>
                                <ColoredText>
                                    <a href='mailto:ksotillo@unimet.edu.ve'>Ksotillo@unimet.edu.ve</a>
                                </ColoredText>
                            </WhiteBox>
                        </motion.div>
                    </GlassCard>
                    <Box mt={4}>
                        <Row>
                            <Col col={4}>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={4} transition={transition}>
                                    <WorkBox bg={'white'} borderRadius={10} p={3}>
                                        <Image
                                            src="/images/class-1/3VAM.png"
                                            width={205}
                                            height={52}
                                        />
                                    </WorkBox>
                                </motion.div>
                            </Col>
                            <Col col={4}>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={5} transition={transition}>
                                    <WorkBox bg={'white'} borderRadius={10} p={3}>
                                        <Image
                                            src="/images/class-1/Aether.png"
                                            width={488}
                                            height={142}
                                        />
                                    </WorkBox>
                                </motion.div>
                            </Col>
                            <Col col={4}>
                                <motion.div  initial='hidden' animate={controls} variants={variants} custom={5} transition={transition}>
                                    <WorkBox bg={'white'} borderRadius={10} p={1}>
                                        <Image
                                            src="/images/class-1/unimet.png"
                                            width={350}
                                            height={141}
                                        />
                                    </WorkBox>
                                </motion.div>
                            </Col>
                        </Row>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

const WorkBox = styled(Box)`
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);
    }
`

const WhiteBox = styled(Box)`
    background-color: white;
    width: fit-content;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
    font-weight: bold;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);
    }
`


const Title = styled.h1`
    font-size: 5rem;
    text-shadow: ${props => props.theme.textShadow};
    text-align: left;
`


export default Class1Slide2;