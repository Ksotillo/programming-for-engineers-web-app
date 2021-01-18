import { Col, Container, Row,  } from 'styled-bootstrap-grid'
import { WelcomeSubtitle, WelcomeTitle } from 'UI/Titles/Titles';
import { Box } from 'UI/Box/Box'
import ClassCard from 'components/ClassCard/ClassCard';
import { useRouter } from 'next/router'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { variants, transition } from 'utils/motionVariants';


export default function Home() {
    const router = useRouter()
    const controls = useAnimation();

    const goToClass = async () => {
        await controls.start('exits')
        router.push('/classes/class-1/slide1')
    }

    useEffect(() => {
        controls.start('visible')
    }, [])

    return (
        <Container fluid>
            <Row alignItems={'center'} justifyContent='center' >
                <Col lg={8} >
                    <motion.div initial='hidden' animate={controls} variants={variants} custom={0} transition={transition} >
                        <WelcomeTitle p={3} mt={4} >
                            ¡Hola! Bienvenido a la página de presentaciones de Programación para Ingenieros
                        </WelcomeTitle>
                    </motion.div>
                </Col>
                <Col lg={6}>
                    <motion.div initial='hidden' animate={controls} variants={variants} custom={1} transition={transition}>
                        <WelcomeSubtitle>
                            A continuación puedes encontrar todas las presentaciones de cada una de las clases
                        </WelcomeSubtitle>
                    </motion.div>
                </Col>
            </Row>
            <Box mt={5} px={4}>
                <Row>
                    <Col col={3} xs={3} onClick={goToClass} >
                        <motion.div initial='hidden' animate={controls} variants={variants} custom={2} transition={transition}>
                            <ClassCard
                                classNumber={'01'}
                                classDate={'17/01/2021'}
                                title={'Introducción a la materia'}
                                decription={'Presentación del profesor y de como iremos llevando la materia'}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Box>
        </Container>
    )
}