import { AnimationControls, useAnimation } from 'framer-motion';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ApplicationContext {
    theme: {
        gradientColors: {
            gradientColor1: string,
            gradientColor2: string,
            gradientColor3: string,
            gradientColor4: string,
        },
        primaryColor: string,
        secondaryColor: string,
        fontFamilyBase: string;
        textShadow: string;
        transition: string;
        boxShadow: string;
    },
    setTheme?: Dispatch<SetStateAction<{
        gradientColors: {
            gradientColor1: string;
            gradientColor2: string;
            gradientColor3: string;
            gradientColor4: string;
        };
        primaryColor: string;
        secondaryColor: string;
    }>>,
    controls?: AnimationControls
}

export const gradientColors = {
    gradientColor1: '#9A65F8',
    gradientColor2: '#4247D7',
    gradientColor3: '#26CEDF',
    gradientColor4: '#625BF8',
}

export const defaultContext = {
    theme: {
        gradientColors,
        primaryColor: '#A488CF',
        secondaryColor: '#503E61',
        fontFamilyBase: 'Poppins, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        textShadow: '0 3px 4px rgba(0,0,0,.1)',
        transition: 'all .3s ease',
        boxShadow: '0 8px 32px 0 rgba( 45,45,45,0.37 )'
    }
}

export const AppContext = createContext<ApplicationContext>(defaultContext)

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        gradientColors: {
            // gradientColor1: '#2A1ec7',
            // gradientColor2: '#07061b',
            // gradientColor3: '#2114A3',
            // gradientColor4: '#1b145e',
            gradientColor1: '#9A65F8',
            gradientColor2: '#4247D7',
            gradientColor3: '#26CEDF',
            gradientColor4: '#625BF8',
        },
        primaryColor: '#A488CF',
        secondaryColor: '#503E61',
        fontFamilyBase: 'Poppins, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        textShadow: '0 3px 4px rgba(0,0,0,.1)',
        transition: 'all .3s ease',
        boxShadow: '0 8px 32px 0 rgba( 45,45,45,0.37 )'
    })

    const controls = useAnimation();

    return (
        <AppContext.Provider value={{ theme, setTheme, controls }}>
            {children}
        </AppContext.Provider>
    );
}