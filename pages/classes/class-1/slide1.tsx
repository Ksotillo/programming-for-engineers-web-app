import Icon from "components/Icon/Icon";
import { Container, Row } from "styled-bootstrap-grid";
import { GlassIconButton } from 'UI/Button/GlassButton';

import styled from 'styled-components';
import { Text, H4, H1 } from "UI/Typography/Typography";
import { GoBackButton } from "UI/Button/GoBackButton";
import { Slider } from "components/Slider/Slider";

const Class1Slide1 = () => {

    return (
        <Container>
            <Row>
                <Title>
                    Programación para ingenieros
                </Title>
            </Row>
        </Container>
    )
}

const Title = styled.h1`
    font-size: 7rem;
    text-shadow: ${props => props.theme.textShadow};
    text-align: center;
`

const SlideHeader = styled.div`
    padding: 1.5rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const SlideFooter = styled.div`
    position: absolute;
    bottom: 0;
    padding: 1.5rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Slide = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default Class1Slide1;