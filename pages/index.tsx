import styled from 'styled-components';
import { Col, Container, Row,  } from 'styled-bootstrap-grid'
import { WelcomeSubtitle, WelcomeTitle } from 'UI/Titles/Titles';
import Image from 'next/image'
import { Box } from 'UI/Box/Box'
import ButtonGradientText from 'UI/Button/Button';
import ClassCard from 'components/ClassCard/ClassCard';
import { useRouter } from 'next/router'
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { variants, transition } from 'utils/motionVariants';
import classes from 'utils/classes';
import { RoundedImageContainer } from 'UI/ImageContainer/RoundedImage'
import { RoundedImage } from 'UI/Image/Image'
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
            <Box mt={5}>
                <StyledRow >
                    {(Object.values(classes)).map((klass, index) => 
                    <Col key={index} col={3} xs={3} onClick={() => goToClass(klass.classNumber)} >
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
                </StyledRow>
            </Box>
            <Box py={4} display={'flex'} justifyContent='center' alignItems='center' >
                <motion.div initial='hidden' animate={controls} variants={variants} custom={3} transition={transition}>
                    Diseñado y desarrollado por
                </motion.div>
                <motion.a  initial='hidden' animate={controls} variants={variants} custom={4} transition={transition}  style={{ margin: '0 .5rem' }}  href={'https://github.com/ksotillo'} target='_blank' rel='noopener noreferrer' >
                        <RoundedImageContainer p={'.5rem'}>
                            <RoundedImage
                                src="/images/class-1/me.jpeg"
                                alt="Kevin Sotillo"
                                width={50}
                                height={50}
                                quality={100}
                            />
                        </RoundedImageContainer>
                    </motion.a>
                <motion.a initial='hidden' animate={controls} variants={variants} custom={5} transition={transition} style={{ margin: '0 .5rem' }} href={'https://github.com/ksotillo'} target='_blank' rel='noopener noreferrer' >
                    <ButtonGradientText>
                        Kevin Sotillo
                    </ButtonGradientText>
                </motion.a>
                {/* <motion.div initial='hidden' animate={controls} variants={variants} custom={} transition={transition}>

                </motion.div> */}
            </Box>
        </Container>
    )
}

const StyledRow = styled(Row)`
    flex-wrap: nowrap;
    overflow-x: auto;
    // overflow-y: hidden;
    padding: 20px;
`;

