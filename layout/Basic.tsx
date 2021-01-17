import { AppContext, AppProvider } from "context/AppContext";
import { useContext } from "react";
import { createGlobalStyle, ThemeProvider  } from "styled-components";
import { BaseCSS } from 'styled-bootstrap-grid';
import { reboot, defaultRebootTheme } from 'styled-reboot';
import { AnimateSharedLayout } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    ${reboot}

    html {
        box-sizing: border-box;
    }

    body {
        overflow: hidden;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        color: white;
    }

    #gradient-canvas {
        width:100%;
        height:100%;
        min-height: 100vh;
        color: ${props => props.theme.gradientColors.gradientColor1};
        --gradient-color-1: ${props => props.theme.gradientColors.gradientColor1};
        --gradient-color-2: ${props => props.theme.gradientColors.gradientColor2};
        --gradient-color-3: ${props => props.theme.gradientColors.gradientColor3};
        --gradient-color-4: ${props => props.theme.gradientColors.gradientColor4};
    }

    .hi {
        text-decoration: underline;
    }

    .glare-wrapper {
        border-radius: 10px;
    }

    // -------------------------- ANIMATIONS ------------------------------ //

    @-webkit-keyframes GradientAnimator {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes GradientAnimator {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes GradientAnimator {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }

`;


const AppTheme = ({ children }: { children: any } ) => {
    const { theme } = useContext(AppContext);
    return (
        <ThemeProvider theme={{ ...defaultRebootTheme, ...theme }}>
            <AnimateSharedLayout>
                <GlobalStyle/>
                <BaseCSS/>
                {children}
            </AnimateSharedLayout>
        </ThemeProvider>
    )
}

export default AppTheme;