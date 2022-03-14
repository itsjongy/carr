import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './EditComment.css'
import { getComments, deleteComment, updateComment } from '../../store/comment';

const EditComment = ({ commentId }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const imageId = useParams();

    const [comment, setComment] = useState('');
    const [showForm, setShowForm] = useState(false);

    const updatingComment = (e) => setComment(e.target.value);

    // show form
    const openForm = async (e) => {
        e.preventDefault();

        if (showForm) return;
        setShowForm(true);
    };

    useEffect(() => {
        if (!showForm) return;

        const closeForm = () => {
            setShowForm(false);
        };

        return () => document.removeEventListener('click', closeForm);
    }, [showForm])

    // buttons
    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedComment = {
            userId: sessionUser.id,
            id: parseInt(commentId),
            comment: comment,
        };

        await dispatch(updateComment(updatedComment));
        await dispatch(getComments());
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        let deletedComment = {
            userId: sessionUser.id,
            id: parseInt(commentId),
            comment: comment,
        };

        if (deletedComment) {
            await dispatch(deleteComment());
            await dispatch(getComments());
        }
    }

    return (
        <div>
            <button className='edit-commentbutton' type='button' onClick={openForm}>Edit</button>
            {showForm && (
                <form className="editcomment-form" onSubmit={handleSubmit}>
                    <div className='edit-comment'>
                        <input
                            className='edit-commentbox'
                            type="text"
                            placeholder="comment"
                            required
                            value={comment}
                            onChange={updatingComment} />
                        <div className="editcomment-button">
                            <button className='editcomment-buttonpost'>Edit</button>
                            {/* <button className='editcomment-buttondelete' type="button" onClick={handleDelete}>Delete</button> */}
                        </div>
                    </div>
                </form>
            )}
        </div >
    )
}

export default EditComment;
