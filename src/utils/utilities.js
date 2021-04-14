export const createID = () => {
    const newID = Math.random().toString(36).slice(-10);
    return newID;
};
