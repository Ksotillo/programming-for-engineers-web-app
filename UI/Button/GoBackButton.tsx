import { IconProps } from 'components/Icon/Icon';
import styled from 'styled-components'
import { space } from 'styled-system';
import Icon from 'components/Icon/Icon';

type ButtonComponentProps = {
    onClick?: (e?: React.MouseEvent) => void
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const GoBackButtonStyled = styled.button`
    padding: 1rem;
    ${space}
    background: transparent;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 50%;
    position: relative;
    border: white solid 1rem;
    transition: ${({ theme }) => theme.transition};

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:2.2rem;
        height:2.2rem;
    }

    &:hover {
        box-shadow: 0 8px 70px 0 rgba( 31, 38, 135, 0.57 );
        margin-left: -1rem;
    }
`


export const GoBackButton = ({ onClick, ...otherProps }: ButtonComponentProps) => {
    return (
        <GoBackButtonStyled onClick={onClick} title='Volver' {...otherProps}>
            {/**@ts-ignore */}
            <Icon className='icon' name='chevronCircleLeft'  {...otherProps} />
        </GoBackButtonStyled>
    );
  }
  
  export default styled(GoBackButton)``;