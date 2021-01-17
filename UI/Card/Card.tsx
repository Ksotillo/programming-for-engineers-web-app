import styled from 'styled-components'
import { space } from 'styled-system';

export const GlassCard = styled.div`
    padding: 1.5rem;
    ${space}
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    position: relative;
    min-height: 200px
`
