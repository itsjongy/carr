import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment, getComments } from "../../store/comment";
import './CreateComment.css';

const CreateComment = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const imageId = useParams();
    console.log("imageId in component", imageId)

    const [comment, setComment] = useState('');

    const updateComment = (e) => setComment(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdComment = {
            userId: sessionUser.id,
            imageId: imageId.id,
            comment
        };

        await dispatch(addComment(createdComment));
        await dispatch(getComments());
        // const newComment = await dispatch(addComment(createdComment));
        // history.push(`/images/${imageId.id}`);
    }

    let sessionComment;
    if (sessionUser) {
        sessionComment = (
            <form className="createcomment-form" onSubmit={handleSubmit}>
                <div className='create-comment'>
                    <p className='comment-title'>Create new comment</p>
                    <input
                        className='create-commentbox'
                        type="text"
                        placeholder="comment"
                        required
                        value={comment}
                        onChange={updateComment} />
                    <div className="comment-button">
                        <button className='createcomment-buttonpost' type="submit">Post</button>
                    </div>
                </div>
            </form>
        )
    } else {
        <></>
    }

    return (
        <div className='createcommentform'>
            <section className="new-commentform-holder">
            </section>
            {sessionComment}
            {/* <div>
                <img className='create-comment' src={comment1} alt=''></img>
            </div> */}
        </div>
    )
}

export default CreateComment;
