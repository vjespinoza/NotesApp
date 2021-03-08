import { useEffect } from "react";

const useClickOutside = (element) => {
    useEffect(() => {
        const test = (e) => {
            if (element.current.contains(e.target)) {
                console.log("yes");
            } else {
                console.log("no");
            }
        };
        document.addEventListener("mousedown", test);
    }, [element]);
};

export default useClickOutside;
