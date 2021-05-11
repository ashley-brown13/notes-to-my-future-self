import React from 'react';
import './TextNote.css'

const TextNote = ({note, tags}) => {

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
            </div>
        </div>
    )

}

export default TextNote
