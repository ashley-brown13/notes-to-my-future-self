import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getNote, deleteNote } from '../../store/notes';
import TextNote from '../TextNote';
import './SingleNotePage.css'

const SingleNotePage = () => {
    const dispatch = useDispatch();
    const {noteId} = useParams();
    const history = useHistory();
    const note = useSelector(state => state.notes.note);

    useEffect(() => {
        dispatch(getNote(noteId));
    }, [noteId]);

    let content = null;

    const handleDelete = async (e) => {
        e.preventDefault();

        let deletedNote = await dispatch(deleteNote(note.id));

        if (deletedNote && deletedNote.spotifyLink) {
            history.push(`/notes/music`);
        } else if (deletedNote && deletedNote.videoLink){
            history.push(`/notes/video`);
        } else if (deletedNote) {
            history.push(`/notes/text`);
        }
      };

    if(note){
        if(note.note.spotifyLink){
            content = (
                <div className="music-note-page">
                    <div className="music-container" style={{
                        backgroundImage: `url(${note.note.background})`
                    }}>
                        <div>
                            <h1>{note.note.title}</h1>
                        </div>
                        <div className="music-and-note">
                            <iframe src={note.fixedLink} title={note.note.title} className="music-player" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            <div className="text-note-container">
                                <h4>{note.note.greeting}</h4>
                                <div>{note.note.noteBody}</div>
                                <h4>{note.note.closing}</h4>
                                <div>{note.note.updatedAt.slice(5, 16)}</div>
                                <div className="note-tags">
                                    {note.tags.map((tag) => {
                                        return <a href={`/tags/${tag.id}`}>#{tag.tagName}&nbsp;</a>
                                    })}
                                </div>
                                <div className="note-buttons">
                                    <form onSubmit={handleDelete}>
                                        <button type="submit" className="note-button">Delete Note</button>
                                    </form>
                                    <a href={`/notes/${note.id}/edit`}><button className="note-button">Edit Note</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (note.note.videoLink){
            content = (
                <div className="video-note-page">
                    <div className="music-container" style={{
                        backgroundImage: `url(${note.note.background})`
                    }}>
                        <div>
                            <h1>{note.note.title}</h1>
                        </div>
                        <iframe width="560" height="315" className="video" src={note.fixedVideoLink} title={note.note.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="text-note-container" id="movie-note">
                            <h4>{note.note.greeting}</h4>
                            <div>{note.note.noteBody}</div>
                            <h4>{note.note.closing}</h4>
                            <div>{note.note.updatedAt.slice(5, 16)}</div>
                            <div className="note-tags" id="movie-tags">
                                {note.tags.map((tag) => {
                                    return <a href={`/tags/${tag.id}`}>#{tag.tagName}&nbsp;</a>
                                })}
                            </div>
                            <div className="note-buttons">
                                <form onSubmit={handleDelete}>
                                    <button type="submit" className="note-button">Delete Note</button>
                                </form>
                                <a href={`/notes/${note.id}/edit`}><button className="note-button">Edit Note</button></a>
                            </div>
                        </div>
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
