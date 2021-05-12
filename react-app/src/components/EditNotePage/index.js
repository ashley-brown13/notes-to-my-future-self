import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, getNote } from '../../store/notes';
import { useHistory, useParams } from 'react-router-dom';
import './EditNotePage.css'

const EditNotePage = () => {
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const history = useHistory();
    const note = useSelector(state => state.notes.note);
    const [title, setTitle] = useState(note?.title)
    const [greeting, setGreeting] = useState(note?.greeting)
    const [closing, setClosing] = useState(note?.closing)
    const [noteBody, setNoteBody] = useState(note?.noteBody)
    const [background, setBackground] = useState(note?.background)
    const [spotifyLink, setSpotifyLink] = useState(note?.spotifyLink)
    const [videoLink, setVideoLink] = useState(note?.videoLink)
    const [tags, setTags] = useState([])
    let userTags = useSelector(state => state.tags.tags)

    useEffect(() => {
        dispatch(getNote(noteId));
    }, [noteId]);

    useEffect(() => {
        setTitle(note?.note.title)
        setGreeting(note?.note.greeting)
        setClosing(note?.note.closing)
        setNoteBody(note?.note.noteBody)
        setBackground(note?.note.background)
      }, [note])

    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          title,
          greeting,
          closing,
          noteBody,
          background,
          spotifyLink,
          videoLink,
          tags
        };

      let newNote = await dispatch(editNote(payload, noteId));
      await dispatch(getNote(noteId))

      if(newNote){
          history.push(`/notes/${noteId}`)
      }

    };

    let content = null;

    // if (note.spotifyLink) {
    //     content = (
    //         <div>
    //             <label className="add-note-label">Spotify Link:</label>
    //                 <input
    //                     type="text"
    //                     className="new-note-select-input"
    //                     name="title"
    //                     onChange={(e) => setSpotifyLink(e.target.value)}
    //                     value={spotifyLink}
    //                     required
    //                 ></input>
    //             <button type="submit" className="new-note-submit">Edit Note</button>
    //         </div>
    //     )
    //   } else if (note.videoLink) {
    //     content = (
    //         <div>
    //             <label className="add-note-label">YouTube Link:</label>
    //                 <input
    //                     type="text"
    //                     className="new-note-input"
    //                     name="title"
    //                     onChange={(e) => setVideoLink(e.target.value)}
    //                     value={videoLink}
    //                     required
    //                 ></input>
    //             <button type="submit" className="new-note-submit">Edit Note</button>
    //         </div>
    //     )
    //   }

    return (
        <div className="edit-note-page">
            <div className='edit-note-form'>
                <form onSubmit={handleSubmit} className="note-form">
                <label className="add-note-label">Title:</label>
                    <input
                        type="text"
                        className="new-note-input"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    ></input>
                <label className="add-note-label">Greeting:</label>
                    <input
                        type="text"
                        className="new-note-input"
                        name="greeting"
                        onChange={(e) => setGreeting(e.target.value)}
                        value={greeting}
                    ></input>
                <label className="add-note-label">Closing:</label>
                    <input
                        type="text"
                        className="new-note-input"
                        name="closing"
                        onChange={(e) => setClosing(e.target.value)}
                        value={closing}
                    ></input>
                <label className="add-note-label">Note Body:</label>
                    <textarea
                        type="text"
                        className="new-note-body-input"
                        name="noteBody"
                        onChange={(e) => setNoteBody(e.target.value)}
                        value={noteBody}
                        required
                    ></textarea>
                <label className="add-note-label">Background:</label>
                    <select
                        type="text"
                        className="new-note-select-input"
                        name="background"
                        onChange={(e) => setBackground(e.target.value)}
                        value={background}
                        required
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="https://wallpapercave.com/wp/wp3477365.jpg">Rainbow</option>
                        <option value="https://png.pngtree.com/thumb_back/fw800/background/20200805/pngtree-purple-and-blue-nebula-galaxy-background-image_386406.jpg">Galaxy</option>
                        <option value="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg">Clouds</option>
                        <option value="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg">Yellow</option>
                        <option value="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg">Pink</option>
                        <option value="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg">Orange</option>
                    </select>
                <label className="add-note-label">Tags:</label>
                    <select
                        type="text"
                        className="new-note-select-input-multiple"
                        name="tags"
                        multiple={true}
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    >
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag.id}>{tag.tagName}</option>
                        })}
                    </select>
                    <button type="submit" className="new-note-submit">Edit Note</button>
                </form>
            </div>
        </div>
      );
}

export default EditNotePage
