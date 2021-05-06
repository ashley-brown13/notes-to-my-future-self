import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTags, addNewTag } from '../../store/tags';


const TagPage = () => {
    const dispatch = useDispatch();
    const [tagName, setTagName] = useState("");
    const user = useSelector(state => state.session.user);
    const tags = useSelector(state => state.tags.tags);

    useEffect(() => {
        dispatch(getTags(user.id));
    }, [user.id]);


    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          tagName
        };
      await dispatch(addNewTag(payload));

      dispatch(getTags())
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="add-tag-form">
                <div className="add-tag-container">
                    <label className="add-tag-label">New Tag:</label>
                    <input
                        type="text"
                        className="new-tag-input"
                        name="tag"
                        onChange={(e) => setTagName(e.target.value)}
                        value={tagName}
                        required
                    ></input>
                </div>
                <button type="submit" className="new-tag-submit">Add Tag</button>
            </form>
            <div></div>
        </div>
      );
}

export default TagPage
