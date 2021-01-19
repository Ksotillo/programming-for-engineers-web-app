import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H2, H3, H4 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box'
import { GlassCard } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";
import Image from 'next/image';

const Class2Slide13 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={12}>
                    <Box display='flex' justifyContent='center'>
                        <motion.div  initial='visible' animate={controls} variants={variants} custom={0} transition={transition}>
                            <H2>
                                Listo... ¿Y ahora que queda?
                            </H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box p={3}>
                        <motion.div  initial='visible'  variants={variants} custom={1} transition={transition}>
                            <H3 shadow mt={4} mb={2} textAlign='center'>
                                Lenguajes de programación
                            </H3>
                        </motion.div>
                        <motion.div initial='visible' variants={variants} custom={2} transition={transition}>
                            <GlassCard>
                                <Row>
                                    <Col col={6}>
                                        <H4 textAlign='center' >Bajo nivel</H4>
                                    </Col>
                                    <Col col={6}>
                                        <H4 textAlign='center'>Alto nivel</H4>
                                    </Col>
                                    <Col col={12}>
                                        <Box p={2}>
                                            <GlassCard>
                                                <Box display='flex' alignItems='center' justifyContent='space-between' py={3}>
                                                    <motion.div initial='visible' style={{ borderRadius: '20px' }}  variants={variants} custom={4} transition={transition} >
                                                        <Image
                                                            src='/images/class-2/hacker.svg'
                                                            width={186}
                                                            height={100}
                                                        />
                                                    </motion.div>
                                                    <motion.div initial='visible' style={{ borderRadius: '20px' }}  variants={variants} custom={4} transition={transition} >
                                                        <Image
                                                            src='/images/class-2/3_objects.svg'
                                                            width={150}
                                                            height={100}
                                                        />
                                                    </motion.div>
                                                </Box>
                                            </GlassCard>
                                        </Box>
                                    </Col>
                                </Row>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box p={3}>
                        <motion.div  initial='visible'  variants={variants} custom={1} transition={transition}>
                            <H3 shadow mt={4} mb={2} textAlign='center'>
                                Entornos de desarrollo
                            </H3>
                        </motion.div>
                        <motion.div initial='visible' variants={variants} custom={2} transition={transition}>
                            <GlassCardContainer>
                                <motion.div initial='visible' variants={variants} custom={4} transition={transition} >
                                    <Image
                                        src='/images/class-2/ides.jpg'
                                        width={350}
                                        height={175}
                                    />
                                </motion.div>
                            </GlassCardContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

const GlassCardContainer = styled(GlassCard)`
    padding: 3.2rem 0rem;
    text-align: center;
    img {
        border-radius: 20px;
    }

`

export default Class2Slide13;