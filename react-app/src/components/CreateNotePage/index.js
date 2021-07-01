import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewNote, getNote } from '../../store/notes';
import { getTags } from '../../store/tags';
import { useHistory } from 'react-router-dom';
import './CreateNotePage.css'

const CreateNotePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [noteType, setNoteType] = useState("");
    const [title, setTitle] = useState("")
    const [greeting, setGreeting] = useState(null)
    const [closing, setClosing] = useState(null)
    const [noteBody, setNoteBody] = useState("")
    const [background, setBackground] = useState("")
    const [spotifyLink, setSpotifyLink] = useState(null)
    const [videoLink, setVideoLink] = useState(null)
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [tags, setTags] = useState([])
    let userTags = useSelector(state => state.tags.tags)

    useEffect(() => {
        dispatch(getTags());
    }, []);

    const handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setTags(value);
      }

    const handlePhoto = (e) => {
      const file = e.target.files[0];
      setImage(file);
  }

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
          image,
          tags
        };

      setImageLoading(true);

      let newNote = await dispatch(addNewNote(payload));
      await dispatch(getNote(newNote.id))

      setImageLoading(false);
      if(newNote){
          history.push(`/notes/${newNote.id}`)
      }

    };

    let content = null;

    if (noteType === "text") {
        content = (
            <div className='new-note-help-and-form'>
                <div className="note-help">
                    <h3 className="help-heading">Background Choices</h3>
                    <div className="background-choices">
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpapercave.com/wp/wp3477365.jpg"/>
                                <p>Rainbow</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpaperaccess.com/full/807102.png"/>
                                <p>Galaxy</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg"/>
                                <p>Clouds</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg"/>
                                <p>Yellow</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg"/>
                                <p>Pink</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"/>
                                <p>Orange</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <option value="https://wallpaperaccess.com/full/807102.png">Galaxy</option>
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
                        onChange={handleChange}
                        value={tags}
                    >
                        {/* <option value="">--Please choose an option--</option> */}
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
            <div className='new-note-help-and-form'>
                <div className="note-help">
                    <h3 className="help-heading">Background Choices</h3>
                    <div className="background-choices">
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpapercave.com/wp/wp3477365.jpg"/>
                                <p>Rainbow</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpaperaccess.com/full/807102.png"/>
                                <p>Galaxy</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg"/>
                                <p>Clouds</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg"/>
                                <p>Yellow</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg"/>
                                <p>Pink</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"/>
                                <p>Orange</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <option value="https://wallpaperaccess.com/full/807102.png">Galaxy</option>
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
                        onChange={handleChange}
                        value={tags}
                    >
                        {/* <option value="">--Please choose an option--</option> */}
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag.id}>{tag.tagName}</option>
                        })}
                    </select>
                <label className="add-note-label">Spotify Link:</label>
                    <input
                        type="text"
                        className="new-note-select-input"
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
            <div className='new-note-help-and-form'>
                <div className="note-help">
                    <h3 className="help-heading">Background Choices</h3>
                    <div className="background-choices">
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpapercave.com/wp/wp3477365.jpg"/>
                                <p>Rainbow</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpaperaccess.com/full/807102.png"/>
                                <p>Galaxy</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg"/>
                                <p>Clouds</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg"/>
                                <p>Yellow</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg"/>
                                <p>Pink</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"/>
                                <p>Orange</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <option value="https://wallpaperaccess.com/full/807102.png">Galaxy</option>
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
                        onChange={handleChange}
                        value={tags}
                    >
                        {/* <option value="">--Please choose an option--</option> */}
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag.id}>{tag.tagName}</option>
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
      } else if (noteType === "photo") {
        content = (
            <div className='new-note-help-and-form'>
                <div className="note-help">
                    <h3 className="help-heading">Background Choices</h3>
                    <div className="background-choices">
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpapercave.com/wp/wp3477365.jpg"/>
                                <p>Rainbow</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://wallpaperaccess.com/full/807102.png"/>
                                <p>Galaxy</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg"/>
                                <p>Clouds</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg"/>
                                <p>Yellow</p>
                            </div>
                        </div>
                        <div className="background-row">
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg"/>
                                <p>Pink</p>
                            </div>
                            <div>
                                <img className="background-thumbnail" alt="background-choice" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"/>
                                <p>Orange</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <option value="https://wallpaperaccess.com/full/807102.png">Galaxy</option>
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
                        onChange={handleChange}
                        value={tags}
                    >
                        {/* <option value="">--Please choose an option--</option> */}
                        {userTags && userTags.tags.map((tag) => {
                            return <option key={tag.id} value={tag.id}>{tag.tagName}</option>
                        })}
                    </select>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={updateImage}
                      />
                      <button type="submit">Upload Photo</button>
                      {(imageLoading)&& <p>Loading...</p>}
                  </form>
                <button type="submit" className="new-note-submit">Create Note</button>
                </form>
            </div>
        )
      }

    return (
        <div className="create-note-page">
            <div>
                <form className="note-type-form">
                    <label className="note-type-label">Select Note Type:</label>
                    <select id="note-types"
                        type="text"
                        name="setNoteType"
                        className="note-type-picker"
                        value={noteType}
                        onChange={(e) => setNoteType(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="text">Text Note</option>
                        <option value="music">Music Note</option>
                        <option value="video">Video Note</option>
                        <option value="photo">Photo Note</option>
                    </select>
                </form>
            </div>
            <div className="create-note-body">
                {content}
            </div>
        </div>
      );
}

export default CreateNotePage
