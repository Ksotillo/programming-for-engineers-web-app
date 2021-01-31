import { useState } from 'react';
import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1, H2  } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox, ColoredTextOnHover } from 'UI/Box/Box';
import { RoundedImageContainer } from 'UI/ImageContainer/RoundedImage'
import { RoundedImage } from 'UI/Image/Image'
import { GlassCard } from 'UI/Card/Card'
import Image from 'next/image';

const summaryVariables = [
    'Son cajas con un identificador que nos permiten guardar objetos como: números, texto, booleanos, etc (o, técnicamente hablando, una locación con nombre que nos permite almacenar información en memoria RAM)',
    'El identificador de una variable debería de ser una combinación de letras en minúscula (de la "a" a la "z") o en mayúscula (de la "A" a la "Z") o números (del 0 al 9) o un guíon bajo (_). Por ejemplo: snake_case, SNAKE_CASE, numero1, variable2',
    'Crear variables con nombres que tengan sentido. Por ejemplo: "numero" tiene mucho más sentido que "n"',
    'Si quieres crear una variable con dos palabras, usar un guión bajo para separarlas (_). Por ejemplo: mi_nombre',
    'Nunca usar simbolos o caracteres especiales (!, @, #, $, %, á, Ü, etc)',
    'Nunca empezar nombres de variables con un número'
]

const summaryDatatypes = [
    'Números naturales',
    'Números de punto flotante (o decimales)',
    'Strings (o cadenas de texto)',
    'Booleanos (True or False)',
]

const summaryConversion = [
    'Usando int() puedes convertir un tipo de dato compatible a número entero',
    'Usando float() puedes converitr un tipo de dato compatible a un número decimal',
    'Usando str() puedes convertir un tipo de dato compatible a una cadena de caracteres',
    'Usando bool() puedes convertir un tipo de dato compatible a un booleano',
]

const items = [
    {
        title: 'Variables',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Variables
                </motion.h2>
                <motion.ul initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    {summaryVariables.map((item, index) => 
                        <motion.li className='small' key={index} initial='hidden' animate='visible' variants={variants} exit='exits' custom={3 + index} transition={transition}>
                            {item}
                        </motion.li>
                    )}
                </motion.ul>
            </GlassCardContent>
        )
    },
    {
        title: 'Tipos de datos',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Tipos de datos
                </motion.h2>
                <motion.ul initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    {summaryDatatypes.map((item, index) => 
                        <motion.li key={index} initial='hidden' animate='visible' variants={variants} exit='exits' custom={3 + index} transition={transition}>
                            {item}
                        </motion.li>
                    )}
                </motion.ul>
            </GlassCardContent>
        )
    },
    {
        title: 'Conversión de datos a otros tipos',
        Component: () => (
            <GlassCardContent>
                <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                    Conversión de datos a otros tipos
                </motion.h2>
                <motion.ul initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
                    {summaryConversion.map((item, index) => 
                        <motion.li key={index} initial='hidden' animate='visible' variants={variants} exit='exits' custom={3 + index} transition={transition}>
                            {item}
                        </motion.li>
                    )}
                </motion.ul>
            </GlassCardContent>
        )
    },
    // {
    //     title: 'Preparadurías',
    //     Component: () => (
    //         <GlassCardContent>
    //             <motion.h2 initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
    //                 Preparadurías
    //             </motion.h2>
    //             <motion.p initial='hidden' animate='visible' variants={variants} exit='exits' custom={2} transition={transition}>
    //                 Hay 4 preparadores. Hay dos horarios para las prepas: viernes y sábado de 12 a 2
    //             </motion.p>
    //         </GlassCardContent>
    //     )
    // },
]

const Class4Slide7 = () =>{
    const controls = useSlideAnimationControls();
    const [itemSelected, setItemSelected] = useState(null);
    return (
        <Container >
            <Row>
                <Col>
                    <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                        <H1 shadow fontSize={'3rem'}>
                            En resumen...
                        </H1>
                    </motion.div>
                </Col>
                <Col col={6}>
                    {items.map((item, index) => 
                        <motion.div initial='hidden' animate={controls} variants={variants} custom={index + 2} transition={transition}>
                            <WhiteBox tabIndex={ 0 } className={item === itemSelected ? 'selected' : ''} onClick={() => setItemSelected(item)} >
                                {/* onBlur={() => item === itemSelected ? setItemSelected(null) : ''} */}
                                <ColoredTextOnHover p={3}>
                                        {`${index + 1}. ${item.title}`}
                                </ColoredTextOnHover>
                            </WhiteBox>
                        </motion.div>
                    )}
                </Col>
                <Col col={6}>
                    <Box pt={3}>
                        {itemSelected &&
                        <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                            <GlassCard>
                                <itemSelected.Component/>
                            </GlassCard>
                        </motion.div>}
                    </Box>
                </Col>
            </Row>

        </Container>
    )
}


const GlassCardContent = styled.div`
    // overflow: auto;
    max-height: 400px;
    padding: 1rem;
    h2 {
        text-align: center;
    }

    ul {

        list-style: '👉  ';

        li {
            margin: .5rem auto;
            font-weight: bold;
            font-size: 1.25rem;

            &.small {
                font-size: .8rem;
            }
        }
    }

`



export default Class4Slide7;