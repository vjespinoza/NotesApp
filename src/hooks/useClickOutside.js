import { useEffect } from "react";

const useClickOutside = (element, handler) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!element.current.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
    }, [element, handler]);
};

export default useClickOutside;
