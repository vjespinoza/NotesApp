import { useEffect } from "react";

const useClickOutside = (targetDOM, dependency, handler) => {
    useEffect(() => {
        if (targetDOM.current !== null) {
            const clickOutside = (e) => {
                if (!targetDOM.current.contains(e.target)) {
                    const nodeName = targetDOM.current.attributes[0].nodeValue;
                    console.log(nodeName);
                    handler(nodeName);
                }
            };

            document.addEventListener("mousedown", clickOutside);
        }
    }, [dependency]);
};

export default useClickOutside;
