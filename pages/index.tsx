import { Col, Container, Row,  } from 'styled-bootstrap-grid'
import { WelcomeSubtitle, WelcomeTitle } from 'UI/Titles/Titles';
import { Box } from 'UI/Box/Box'
import ClassCard from 'components/ClassCard/ClassCard';
import { useRouter } from 'next/router'
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { variants, transition } from 'utils/motionVariants';
import classes from 'utils/classes';
import { AppContext, gradientColors } from 'context/AppContext';

export default function Home() {
    const router = useRouter()
    const controls = useAnimation();
    const { setTheme } = useContext(AppContext);

    const goToClass = async (classNumber) => {
        await controls.start('exits')
        router.push(`/classes/class-${classNumber}/slide-1`)
    }

    useEffect(() => {
        controls.start('visible')
        setTheme(prevTheme => ({
            ...prevTheme,
            gradientColors:{
                ...gradientColors
            }
        }))
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
                    {(Object.values(classes)).map((klass, index) => 
                    <Col col={3} xs={3} onClick={() => goToClass(klass.classNumber)} >
                        <motion.div initial='hidden' animate={controls} variants={variants} custom={index + 2} transition={transition}>
                            <ClassCard
                                classNumber={klass.classNumber}
                                classDate={klass.date}
                                title={klass.title}
                                decription={klass.description}
                            />
                        </motion.div>
                    </Col>
                    )}
                </Row>
            </Box>
        </Container>
    )
}