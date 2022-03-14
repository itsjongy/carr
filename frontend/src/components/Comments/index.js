import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comment";
import EditComment from "../EditComments";
import './Comments.css';

const Comments = ({ image }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
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
                            <h5>{comment?.User.username}</h5>
                        </div>
                        <div className="comment-userscomment">
                            {comment?.comment}
                        </div>
                        {sessionUser?.id === comment?.userId ? <EditComment commentId={comment.id} /> : <></>}
                    </ul>
                ))}
            </div>
        </div>
    )
};

export default Comments;
