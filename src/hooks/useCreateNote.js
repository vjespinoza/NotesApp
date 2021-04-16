import React, {useState, useContext} from 'react';

const NoteContext = React.createContext();

const useCreateNote = () => useContext(NoteContext);

export const NoteDataProvider = ({children}) => {

    const [note, setNote] = useState({
            id: null,
            content: {title: '', body: ''},
            alert: {state: false, time: null, date: null},
            color: null,
            tags: [],
            created: null
        })

        const updateNote = (newNote) => {
            setNote({...note, newNote});
        };
        
    return (
        <NoteContext.Provider value={{note, setNote, updateNote}}>
            {children}
        </NoteContext.Provider>
    );
};
 
export default useCreateNote;