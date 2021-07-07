import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/notes';
import SmallNote from '../SmallNote';
import './PhotoNotesPage.css'


const PhotoNotesPage = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    let photoNotes;

    if(notes){
        photoNotes = notes.photoNotes
    }

    return (
        <div className="photo-notes-page">
            {photoNotes && photoNotes.map((note) => (
                <SmallNote note={note}/>
            ))}
        </div>
    )

}

export default PhotoNotesPage
