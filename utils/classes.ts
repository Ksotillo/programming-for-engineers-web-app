const classes: {
    [x: string]: {
        title: string;
        classNumber: number;
        totalSlides: number;
        date: string;
        description: string;
        colors?: {
            gradientColor1: string;
            gradientColor2: string;
            gradientColor3: string;
            gradientColor4: string;
        }
    }
} = {
    'class-1': {
        title: 'Introducción a la materia',
        classNumber: 1,
        totalSlides: 3,
        date: '18/01/2020',
        description: 'Presentación del profesor y de como iremos llevando la materia',

    },
    'class-2': {
        title: 'Introducción a la programación',
        classNumber: 2,
        totalSlides: 13,
        date: '18/01/2020',
        description: 'Breve introducción a la programación',

    },
    'class-3': {
        title: 'Entradas y salidas',
        classNumber: 3,
        totalSlides: 2,
        date: '27/01/2020',
        description: 'En esta clase revisamos como hacer entradas (inputs) y salidas (outputs) con Python',
        colors: {
            gradientColor1: '#d3e0ea',
            gradientColor2: '#1687a7',
            gradientColor3: '#276678',
            gradientColor4: '#1a4551',
        }
    },
    'class-4': {
        title: 'Variables y tipos de datos',
        classNumber: 4,
        totalSlides: 7,
        date: '31/01/2020',
        description: 'En esta clase revisamos qué son las variables y cuales son los tipos de datos en Python',
        colors: {
            gradientColor1: '#75cfb8',
            gradientColor2: '#bbdfc8',
            gradientColor3: '#f0e5d8',
            gradientColor4: '#ffc478',
        }
    },
    'class-5': {
        title: 'Precedencia de operadores',
        classNumber: 5,
        totalSlides: 2,
        date: '31/01/2020',
        description: 'En esta clase revisaremos el orden de precedencia de los operadores aritméticos',
        colors: {
            gradientColor1: '#94b5c0',
            gradientColor2: '#350b40',
            gradientColor3: '#ad6c80',
            gradientColor4: '#ee99a0',
        }
    }
}

export default classes;