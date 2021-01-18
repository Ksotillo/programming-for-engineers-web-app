import { IconProps } from 'components/Icon/Icon';
import styled from 'styled-components'
import { space } from 'styled-system';
import Icon from 'components/Icon/Icon';

type ButtonComponentProps = {
    
    onClick?: (e?: React.MouseEvent) => void
  } & React.ButtonHTMLAttributes<HTMLButtonElement> & IconProps;

export const GlassIconButtonStyled = styled.button`
    padding: 1rem;
    ${space}
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 50%;
    position: relative;
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    transition: ${({ theme }) => theme.transition};

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: ${({ theme }) => theme.transition};
        background: linear-gradient(90deg, ${({ theme }) => theme.gradientColors.gradientColor1} 0%, ${({ theme }) => theme.gradientColors.gradientColor2} 33%, ${({ theme }) => theme.gradientColors.gradientColor3} 66%,  ${({ theme }) => theme.gradientColors.gradientColor4} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: GradientAnimator 7s ease infinite;
        background-size: 400% 400%;
    }

    &:hover {
        box-shadow: 0 8px 70px 0 rgba( 31, 38, 135, 0.57 );
        background: rgba( 255, 255, 255, 0.35 );
        .icon {
            transform: ${props => props.name === 'chevronLeft' ? 'translate(-70%, -50%)!important' : props.name === 'chevronRight' ? 'translate(-30%, -50%)!important' : '' };
        }
    }
`


export const GlassIconButton = ({ onClick, ...otherProps }: ButtonComponentProps) => {
    return (
        <GlassIconButtonStyled onClick={onClick} {...otherProps}>
            <Icon className='icon' style={{
            }} {...otherProps} />
        </GlassIconButtonStyled>
    );
  }
  
  export default styled(GlassIconButton)``;
