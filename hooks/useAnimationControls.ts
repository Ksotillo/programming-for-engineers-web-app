import { AppContext } from "context/AppContext";
import { useContext, useEffect } from "react";

export const useSlideAnimationControls = () => {
    const { controls } = useContext(AppContext);

    useEffect(() => {
        controls.start('visible')
    }, [])

    return controls;
}