import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../store/notes';
import { useHistory } from 'react-router-dom';
import './TextNote.css'

const TextNote = ({note, tags}) => {
    const dispatch = useDispatch()
    const history = useHistory();

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

    return (
        <div className="text-note-container"
             style={{
                backgroundImage: `url(${note.background})`
                }}
            >
            <div className="text-info-container">
                <h2>{note.title}</h2>
                <h4>{note.greeting}</h4>
                <div>{note.noteBody}</div>
                <h4>{note.closing}</h4>
                <div>{note.createdAt.slice(5, 16)}</div>
                <div className="note-tags">
                    {tags.map((tag) => {
                        return <a href={`/tags/${tag.id}`}>#{tag.tagName}&nbsp;</a>
                    })}
                </div>
                <div className="note-buttons">
                    <form onSubmit={handleDelete}>
                        <button type="submit" className="note-button">Delete Note</button>
                    </form>
                    <a href={`/${note.id}/edit`}><button className="note-button">Edit Note</button></a>
                </div>
            </div>
        </div>
    )

}

export default TextNote
