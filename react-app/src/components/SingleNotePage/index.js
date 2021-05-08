import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNote } from '../../store/notes';
import TextNote from '../TextNote';
import './SingleNotePage.css'

const SingleNotePage = () => {
    const dispatch = useDispatch();
    const {noteId} = useParams()
    const note = useSelector(state => state.notes.note);


    useEffect(() => {
        dispatch(getNote(noteId));
    }, [noteId]);

    let content = null;

    if(note){
        if(note.note.spotifyLink){
            content = (
                <div className="music-note-page">
                    <iframe src={note.fixedLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <div>
                        <TextNote note={note.note}/>
                    </div>
                </div>
            )
        } else if (note.videoLink){
            content = (
                <div></div>
            )
        } else {
            content = (
                <div className="text-note">
                    <TextNote note={note.note}/>
                </div>
            )
        }

    }


    return (
        <div>
            {content}
        </div>
    )

}

export default SingleNotePage
