
import styled, { keyframes } from 'styled-components';
import { GlassCard } from 'UI/Card/Card';
import { space, layout, color, border  } from 'styled-system';


const bounceAnimation = keyframes`

from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

export const RoundedImageContainer = styled<any>(GlassCard)`
  ${space}
    border-radius: 50%!important;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    transition: ${({ theme }) => theme.transition};
    animation: ${({ bounce }) => bounce ? `${bounceAnimation} 10s linear infinite` : ''};

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);
    }
`