import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

export const Box = styled.div<{ [x: string]: any }>`
    ${space}
    ${layout}
    ${color}
`