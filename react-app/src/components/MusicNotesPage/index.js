import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/notes';
import SmallNote from '../SmallNote';
import './MusicNotesPage.css'


const MusicNotesPage = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    let musicNotes;

    if(notes){
        musicNotes = notes.playlistNotes
    }

    return (
        <div className="music-notes-page">
            {musicNotes && musicNotes.map((note) => (
                <SmallNote note={note}/>
            ))}
        </div>
    )

}
 export default MusicNotesPage
