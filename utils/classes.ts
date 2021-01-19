const classes: {
    [x: string]: {
        title: string;
        classNumber: number;
        totalSlides: number;
        date: string;
        description: string;
    }
} = {
    'class-1': {
        title: 'Introducción a la materia',
        classNumber: 1,
        totalSlides: 3,
        date: '18/01/2020',
        description: 'Presentación del profesor y de como iremos llevando la materia'
    },
    'class-2': {
        title: 'Introducción a la programación',
        classNumber: 2,
        totalSlides: 13,
        date: '18/01/2020',
        description: ''
    }
}

export default classes;