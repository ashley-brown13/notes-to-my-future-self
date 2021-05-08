import React, { useEffect } from 'react';
import './TextNote.css'

const TextNote = ({note}) => {
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
            </div>
        </div>
    )

}

export default TextNote
