import React from 'react';
import './SmallNote.css'

const SmallNote = ({note}) => {
    return (
        <a href={`/notes/${note.id}`}>
            <div className="small-note-container"
                style={{
                    backgroundImage: `url(${note.background})`
                    }}
                >
                    <div className="small-note-container">
                        <h2>{note.title}</h2>
                        <h4>{note.greeting}</h4>
                        <div>{note.noteBody}</div>
                        <h4>{note.closing}</h4>
                        <div>{note.updatedAt.slice(5, 16)}</div>
                    </div>
            </div>
        </a>
    )
}
 export default SmallNote
