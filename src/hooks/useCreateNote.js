
const useCreateNote = (obj) => {
    const note =  {
        id: null,
        content: {title: '', body: ''},
        alert: {state: false, time: null, date: null},
        color: null,
        tags: [],
        created: null
    }

    const newNote = {...note, ...obj}
        
    return {newNote};
}
 
export default useCreateNote;