import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewNote } from '../../store/notes';
import { getTags } from '../../store/tags';

const CreateNotePage = () => {
    const dispatch = useDispatch();
    const [noteType, setNoteType] = useState("");
    const [title, setTitle] = useState("")
    const [greeting, setGreeting] = useState(null)
    const [closing, setClosing] = useState(null)
    const [noteBody, setNoteBody] = useState("")
    const [background, setBackground] = useState("")
    const [spotifyLink, setSpotifyLink] = useState(null)
    const [videoLink, setVideoLink] = useState(null)
    const [tags, setTags] = useState([])
    let userTags = useSelector(state => state.tags.tags)

    useEffect(() => {
        dispatch(getTags());
    }, []);

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

      let newNote = await dispatch(addNewNote(payload));

    };

    let content = null;

    if (noteType === "text") {
        content = (
            <div>
                <form onSubmit={handleSubmit}>
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
                        className="new-note-input"
                        name="noteBody"
                        onChange={(e) => setNoteBody(e.target.value)}
                        value={noteBody}
                        required
                    ></textarea>
                <label className="add-note-label">Background:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="background"
                        onChange={(e) => setBackground(e.target.value)}
                        value={background}
                        required
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="https://wallpapercave.com/wp/wp3477365.jpg">Rainbow</option>
                        <option value="https://cdn.hipwallpaper.com/i/57/82/W15Tai.jpg">Gallaxy</option>
                        <option value="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg">Clouds</option>
                        <option value="https://www.kindpng.com/picc/m/62-625701_colorful-music-notes-clipart-music-notes-transparent-background.png">Music</option>
                    </select>
                <label className="add-note-label">Tags:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="tags"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    >
                        <option value="">--Please choose an option--</option>
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag.id}>{tag.tagName}</option>
                        })}
                    </select>
                    <button type="submit" className="new-note-submit">Create Note</button>
                </form>
            </div>
        )
      } else if (noteType === "music") {
        content = (
            <div>
                <form onSubmit={handleSubmit}>
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
                        className="new-note-input"
                        name="noteBody"
                        onChange={(e) => setNoteBody(e.target.value)}
                        value={noteBody}
                        required
                    ></textarea>
                <label className="add-note-label">Background:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="background"
                        onChange={(e) => setBackground(e.target.value)}
                        value={background}
                        required
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="https://wallpapercave.com/wp/wp3477365.jpg">Rainbow</option>
                        <option value="https://cdn.hipwallpaper.com/i/57/82/W15Tai.jpg">Gallaxy</option>
                        <option value="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg">Clouds</option>
                        <option value="https://www.kindpng.com/picc/m/62-625701_colorful-music-notes-clipart-music-notes-transparent-background.png">Music</option>
                    </select>
                <label className="add-note-label">Tags:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="tags"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    >
                        <option value="">--Please choose an option--</option>
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag}>{tag.tagName}</option>
                        })}
                    </select>
                <label className="add-note-label">Spotify Link:</label>
                    <input
                        type="text"
                        className="new-note-input"
                        name="title"
                        onChange={(e) => setSpotifyLink(e.target.value)}
                        value={spotifyLink}
                        required
                    ></input>
                <button type="submit" className="new-note-submit">Create Note</button>
                </form>
        </div>
        )
      } else if (noteType === "video") {
        content = (
            <div>
                <form onSubmit={handleSubmit}>
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
                        className="new-note-input"
                        name="noteBody"
                        onChange={(e) => setNoteBody(e.target.value)}
                        value={noteBody}
                        required
                    ></textarea>
                <label className="add-note-label">Background:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="background"
                        onChange={(e) => setBackground(e.target.value)}
                        value={background}
                        required
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="https://wallpapercave.com/wp/wp3477365.jpg">Rainbow</option>
                        <option value="https://cdn.hipwallpaper.com/i/57/82/W15Tai.jpg">Gallaxy</option>
                        <option value="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg">Clouds</option>
                        <option value="https://www.kindpng.com/picc/m/62-625701_colorful-music-notes-clipart-music-notes-transparent-background.png">Music</option>
                    </select>
                <label className="add-note-label">Tags:</label>
                    <select
                        type="text"
                        className="new-note-input"
                        name="tags"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    >
                        <option value="">--Please choose an option--</option>
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag}>{tag.tagName}</option>
                        })}
                    </select>
                <label className="add-note-label">YouTube Link:</label>
                    <input
                        type="text"
                        className="new-note-input"
                        name="title"
                        onChange={(e) => setVideoLink(e.target.value)}
                        value={videoLink}
                        required
                    ></input>
                <button type="submit" className="new-note-submit">Create Note</button>
                </form>
            </div>
        )
      }

    return (
        <div>
            <div>
                <form className="note-type-form">
                    <label className="note-type-label">Select Note Type:</label>
                    <select id="note-types"
                        type="text"
                        name="setNoteType"
                        value={noteType}
                        onChange={(e) => setNoteType(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="text">Note</option>
                        <option value="music">Music Note</option>
                        <option value="video">Video Note</option>
                    </select>
                </form>
            </div>
            <div>
                {content}
            </div>
        </div>
      );
}

export default CreateNotePage
