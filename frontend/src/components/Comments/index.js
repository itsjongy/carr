import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comment";
import './Comments.css';

const Comments = () => {
    const dispatch = useDispatch();
    const commentObj = useSelector(state => state.commentState.entries)
    const comments = Object.values(commentObj)

    console.log("------------------", commentObj)
    console.log("+++++++++++++++", comments)

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    return (
        <div className="comment-container">
            <div className="comment-comment">
                <p>SDFOIFNSDGION</p>
                    {/* {comments.map(comment => (
                        <ul key={comment.id}>
                            <p>{comment.comment}</p>
                        </ul>
                    ))} */}
            </div>
        </div>
    )
};

export default Comments;
