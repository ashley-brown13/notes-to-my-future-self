import React from 'react';
import './SmallNote.css'

const SmallNote = ({note}) => {
    return (
        <div className="small-note-container"
             style={{
                backgroundImage: `url(${note.background})`
                }}
            >
            <a>
                <div className="small-note-container">
                    <h2>{note.title}</h2>
                    <h4>{note.greeting}</h4>
                    <div>{note.noteBody}</div>
                    <h4>{note.closing}</h4>
                    <div>{note.createdAt.slice(5, 16)}</div>
                </div>
            </a>
        </div>
    )
}
 export default SmallNote
