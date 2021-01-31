import styled from 'styled-components';
import { space, layout, color, border, flexbox   } from 'styled-system';

export const Box = styled.div<{ [x: string]: any }>`
    ${space}
    ${layout}
    ${color}
    ${border}
    ${flexbox}
`

export const ColoredTextOnHover = styled(Box)`
    text-shadow: ${({ shadow, theme }) => shadow ? theme.textShadow : null};
    font-size: 1.5rem;
    font-weight: bold;
`

export const WhiteBox = styled(Box)`
    width: fit-content;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
    font-weight: bold;
    margin: 1rem;
    cursor: pointer;
    outline: none;

    &:hover, &.selected {
        background-color: white;
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);

        ${ColoredTextOnHover} {
            background: linear-gradient(90deg, ${({ theme }) => theme.gradientColors.gradientColor1} 0%, ${({ theme }) => theme.gradientColors.gradientColor2} 33%, ${({ theme }) => theme.gradientColors.gradientColor3} 66%,  ${({ theme }) => theme.gradientColors.gradientColor4} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: GradientAnimator 7s ease infinite;
            background-size: 400% 400%;
        }
    }
`