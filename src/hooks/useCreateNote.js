import {useState} from 'react'

const noteModel = {
    id: null,
    content: {title: '', body: ''},
    alert: {state: false, time: null, date: null},
    color: null,
    tags: [],
    created: null
}

const useCreateNote = (key, value) => {
    
    const [note, setNote] = useState(noteModel)

    const newNote = noteModel[key] = value;

    return {note};
}
 
export default useCreateNote;