import { Variants, Transition } from 'framer-motion';

export const variants: Variants = {
    visible: i => ({
        opacity: 1,
        transform: 'translateY(0px)',
        transition: {
            delay: i * 0.1
        }
    }),
    hidden: {
        opacity: 0,
        transform: 'translateY(60px)',
    },
    exits: i => ({
        opacity: 0,
        transform: 'translateY(-60px)',
        transition: {
            delay: i * 0.1,
            ease: 'easeInOut'
        }
    })
};


export const transition: Transition = { duration: .5 };