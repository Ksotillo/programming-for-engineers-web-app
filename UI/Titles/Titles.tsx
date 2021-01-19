import styled from 'styled-components';
import { space,  } from 'styled-system';

export const WelcomeTitle = styled.h1<any>`
    ${space}
    text-shadow: ${props => props.theme.textShadow};
    text-align: center;
    `

export const WelcomeSubtitle = styled.h4`
    ${space}
    text-shadow: ${props => props.theme.textShadow};
    text-align: center;
`