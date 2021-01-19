
import ButtonGradientText from 'UI/Button/Button';
import { GlassCard } from 'UI/Card/Card';
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';

interface ClassCardProps {
    classNumber: string | number;
    classDate: string | Date;
    title: string;
    decription: string;
    className?: string;
}

const ClassCard = ({ 
    classNumber,
    classDate,
    title,
    decription,
    className
}: ClassCardProps) => {

    return (
        <TiltStyled glareEnable glareMaxOpacity={1} >
            <ClassCardStyles className={className}>
                <ClassNumber>{classNumber}</ClassNumber>
                <ClassDate>{classDate}</ClassDate>
                <h2>
                    {title}
                </h2>
                <p>
                    {decription}
                </p>
                <ButtonGradientText>
                    Ir a clase
                </ButtonGradientText>
            </ClassCardStyles>
        </TiltStyled>
    )
}



const ClassNumber = styled.div`
    position: absolute;
    font-size: 5rem;
    font-weight: bold;
    top: -15px;
    right: 15px;
    opacity: 0.2;
    transition: ${({ theme }) => theme.transition};
`

const ClassDate = styled.div`
position: absolute;
font-size: 1rem;
font-weight: bold;
top: 10px;
left: 15px;
opacity: 0.2;
transition: ${({ theme }) => theme.transition};
`

export const ClassCardStyles = styled(GlassCard)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    cursor: pointer;

    h2 {
        transform: translateY(45px);
        transition: ${({ theme }) => theme.transition};
    }

    p {
        opacity: 0;
        transform: translateY(20px);
        transition: all .35s ease;
    }

    ${ButtonGradientText} {
        opacity: 0;
        transform: translateY(20px);
        transition: all .5s ease;
    }

`



const TiltStyled = styled(Tilt)`
border-radius: 10px;
cursor: pointer;

&:hover {
    h2 {
        transform: translateY(0px);
    }

    p {
        opacity: 1;
        transform: translateY(0px);
    }
    ${ButtonGradientText} {
        opacity: 1;
        transform: translateY(0px);
        transition: all .5s ease;
    }

    ${ClassNumber} {
        opacity: 0.4;
        letter-spacing: .5rem;
        transition: ${({ theme }) => theme.transition};
    }
    
    ${ClassDate} {
        letter-spacing: .1rem;
        opacity: 0.4;
        transition: ${({ theme }) => theme.transition};
    }
}
`;

export default ClassCard;
// export default styled<ClassCardProps>(ClassCard)``;