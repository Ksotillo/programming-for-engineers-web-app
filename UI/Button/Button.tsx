import styled from 'styled-components'

export type ButtonComponentProps = {
    children?: HTMLCollection | string,
    onClick?: (e?: React.MouseEvent) => void
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = styled.button<ButtonComponentProps>`
padding: 5px 12px;
//   color: ${({ theme }) => theme.primaryColor};
font-size: 14px;
font-weight: 700;
background-color: white;
border: 0px;
border-radius: 5px;
appearance: none;
cursor: pointer;
`;

export const ColoredText = styled.div`
background: linear-gradient(90deg, ${({ theme }) => theme.gradientColors.gradientColor1} 0%, ${({ theme }) => theme.gradientColors.gradientColor2} 33%, ${({ theme }) => theme.gradientColors.gradientColor3} 66%,  ${({ theme }) => theme.gradientColors.gradientColor4} 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: GradientAnimator 7s ease infinite;
background-size: 400% 400%;
`

  
const ButtonGradientText = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
    return (
        <Button onClick={onClick} {...otherProps}>
            {/**@ts-ignore */}
            <ColoredText>
                {children}
            </ColoredText>
        </Button>
    );
  }
  
  export default styled(ButtonGradientText)``;