import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment, updateComment } from "../../store/comment";
import './Comments.css';

const Comments = ({ commmentId, imageId }) => {
    const commentObj = useSelector(state => state.commentState.entries)
    const dispatch = useDispatch();

    const [comment, setComment] = useState(comment.comment);

    const updateComment = (e) => setComment(e.target.value);

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    return (
        <div>
            {comments.map(comment => (
                <ul key={comment.id}>
                    <p>{comment.comment}</p>
                </ul>
            ))}
        </div>
    )
};

export default Comments;
