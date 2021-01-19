import Icon from "components/Icon/Icon";
import { Container, Row } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import Image from 'next/image';
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box'
import { GlassCard } from "UI/Card/Card";

const Class2Slide5 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Box display='flex' flexDirection='column' alignItems='center' width='100%'>
                    <motion.h2  layoutId='steps' custom={0} transition={transition}>
                        <Text shadow >
                            Una serie de pasos o instrucciones para dar solución a un problema
                        </Text>
                    </motion.h2>
                    <motion.div initial='hidden' animate={controls} variants={variants} exit='exits' custom={3} transition={transition}>
                        <GlassCard>
                            <Box display='flex' justifyContent='center' >
                                <Image
                                    src='/images/class-2/9_objects.svg'
                                    width={600}
                                    height={400}
                                />
                            </Box>
                        </GlassCard>
                    </motion.div>
                </Box>
            </Row>  
        </Container>
    )
}
// 9_objects.svg



export default Class2Slide5;