import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/notes';
import SmallNote from '../SmallNote';
import './TextNotesPage.css'


const TextNotesPage = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    let textNotes;

    if(notes){
        textNotes = notes.textNotes
    }

    return (
        <div className="text-notes-page">
            {textNotes && textNotes.map((note) => (
                <SmallNote note={note}/>
            ))}
        </div>
    )

}
 export default TextNotesPage
