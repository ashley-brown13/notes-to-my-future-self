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
                    <iframe src={note.fixedLink} title={note.note.title} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <div>
                        <TextNote note={note.note} tags={note.tags}/>
                    </div>
                </div>
            )
        } else if (note.note.videoLink){
            content = (
                <div className="video-note-page">
                    <iframe width="560" height="315" className="video" src={note.fixedVideoLink} title={note.note.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div>
                        <TextNote note={note.note} tags={note.tags}/>
                    </div>
                </div>
            )
        } else {
            content = (
                <div className="text-note">
                    <TextNote note={note.note} tags={note.tags}/>
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
