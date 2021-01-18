import styled from 'styled-components';
import { space, layout, color, typography  } from 'styled-system';

interface TypographyProps {
    color: 'fainted' | 'semiTransparent';
    [x: string]: any;
}

function getColor(color: TypographyProps['color']) {
    const colors = {
        fainted: 'rgba(255, 255, 255, 0.5)',
        semiTransparent:  'rgba(255, 255, 255, 0.25)',
    }

    return colors[color] || 'inherit';
}

export const H1 = styled.h1<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}

`
export const H2 = styled.h2<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`
export const H3 = styled.h3<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`
export const H4 = styled.h4<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`
export const H5 = styled.h5<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`
export const H6 = styled.h6<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`
export const Text = styled.p<TypographyProps>`
    margin-bottom: 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    color: ${props => getColor(props.color)}
`