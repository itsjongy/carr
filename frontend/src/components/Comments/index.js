import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comment";
import './Comments.css';

const Comments = ({ image }) => {
    const dispatch = useDispatch();
    const commentObj = useSelector(state => state.commentState.entries)
    const singleImage = image;
    const comments = Object.values(commentObj)

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    return (
        <div className="comment-container">
            <div className="comment-comment">
                {comments?.map(comment => (
                    comment?.imageId === singleImage?.id &&
                    <ul key={"" + comment?.id}>
                        <div>
                            {/* THIS IS SHOWING ID NUMBER NOT THE USERNAME */}
                            <h5>{comment?.User.username}</h5>
                        </div>
                        <div className="comment-userscomment">
                            {comment?.comment}
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    )
};

export default Comments;
