import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTag } from '../../store/tags';
import SmallNote from '../SmallNote';
import './SingleTagPage.css'


const SingleTagPage = () => {
    const dispatch = useDispatch();
    const { tagId } = useParams()
    const tag = useSelector(state => state.tags.tag);

    useEffect(() => {
        dispatch(getTag(tagId));
    }, [tagId]);

    return (
        <div className="all-tag-notes">
            <div className="tag-notes-page">
                {tag && tag.notes.map((note) => (
                    <SmallNote note={note}/>
                ))}
            </div>
        </div>
    )

}
 export default SingleTagPage
