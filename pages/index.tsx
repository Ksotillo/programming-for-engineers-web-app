import { Col, Container, Row,  } from 'styled-bootstrap-grid'
import { WelcomeSubtitle, WelcomeTitle } from 'UI/Titles/Titles';
import { Box } from 'UI/Box/Box'
import ClassCard from 'components/ClassCard/ClassCard';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import { motion, Variants, Transition } from 'framer-motion';

const variants: Variants = {
    visible: i => ({
        opacity: 1,
        transform: 'translateY(0px)',
        transition: {
            delay: i * 0.1
        }
    }),
    hidden: {
        opacity: 0,
        transform: 'translateY(60px)',
    }
}

// const exits: Variants = {
//     visible: i => ({
//         opacity: 1,
//         transform: 'translateY(0px)',
//         transition: {
//             delay: i * 0.1
//         }
//     }),
//     hidden: {
//         opacity: 0,
//         transform: 'translateY(60px)',
//     }
// }

const transition: Transition = { duration: .5 }

export default function Home() {
  return (
        <Container fluid>
            <Row alignItems={'center'} justifyContent='center' >
                <Col lg={8} >
                    <motion.div initial='hidden' animate='visible' variants={variants} custom={0} transition={transition}>
                        <WelcomeTitle p={3} mt={4} >
                            ¡Hola! Bienvenido a la página de presentaciones de Programación para Ingenieros
                        </WelcomeTitle>
                    </motion.div>
                </Col>
                <Col lg={6}>
                    <motion.div initial='hidden' animate='visible' variants={variants} custom={1} transition={transition}>
                        <WelcomeSubtitle>
                            A continuación puedes encontrar todas las presentaciones de cada una de las clases
                        </WelcomeSubtitle>
                    </motion.div>
                </Col>
            </Row>
            <Box mt={5} px={4}>
                <Row>
                    <Col col={3} xs={3}>
                        <motion.div initial='hidden' animate='visible' variants={variants} custom={2} transition={transition}>
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