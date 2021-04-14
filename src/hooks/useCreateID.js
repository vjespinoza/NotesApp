import { useState, useEffect } from "react";

//Takes notes (from App component state) as param in order to use as dependency.
const useCreateID = (param) => {
    const [counter, setCounter] = useState(1);
    const [newID, setNewID] = useState("");

    useEffect(() => {
        //Random id (ID Prefix)
        const prefix = Math.random().toString(36).slice(-10);

        //Counter (ID sufix)
        const zeroBase = "0000";

        setCounter((counter) => counter + 1);

        const intSize = counter.toString().length;

        const sliceBase = zeroBase.slice(0, zeroBase.length - intSize);

        const sufix = sliceBase + counter;

        const noteID = prefix + "_" + sufix;

        setNewID(noteID);
    }, [param]);

    return { newID };
};

export default useCreateID;
