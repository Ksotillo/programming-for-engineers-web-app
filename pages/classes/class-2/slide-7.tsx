import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box'
import { GlassCard } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class2Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <Box display='flex' justifyContent='center'>
                        <motion.div  initial='hidden' layoutId='whatineed' animate={controls} variants={variants} custom={0} transition={transition}>
                            <H2>
                                ¿Qué necesito para programar?
                            </H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box pr={7}>
                        <motion.div initial='hidden' animate={controls} variants={variants} exit='exits' custom={1} transition={transition}>
                            <H3 shadow mt={4} mb={2}>
                                Mentalidad abierta
                            </H3>
                        </motion.div>
                        <motion.div initial='hidden' animate={controls} variants={variants} exit='exits' custom={2} transition={transition}>
                            <GlassCard>
                                Preguntar todo lo que no se entiende y siempre querer aprender más. En programación siempre se está aprendiendo algo nuevo.
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box display='flex' justifyContent='flex-end'>
                        <motion.div initial='hidden' animate={controls} variants={variants} exit='exits' custom={3} transition={transition}>
                            <RoundedImageContainer>
                                <RoundedImage
                                    src={'/images/class-2/mindset.svg'}
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
export default Class2Slide7;