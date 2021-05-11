import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/notes';
import SmallNote from '../SmallNote';
import './VideoNotesPage.css'


const VideoNotesPage = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    let videoNotes;

    if(notes){
        videoNotes = notes.videoNotes
    }

    return (
        <div className="video-notes-page">
            {videoNotes && videoNotes.map((note) => (
                <SmallNote note={note}/>
            ))}
        </div>
    )

}
 export default VideoNotesPage
