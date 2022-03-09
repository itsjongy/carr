import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { addImage } from "../../store/image";

const CreateImage = () => {
    const sessionUser = useSelector(state => state.session.User);
    const dispatch = useDispatch();
    const history = useHistory();

    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');

    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    // const reset = () => {
    //     setImageUrl("");
    //     setContent("");
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdImage = {
            userId: sessionUser.id,
            imageUrl,
            content
        };

        if (createdImage) {
            const newImage = await dispatch(addImage(createdImage));
            history.push(`/images/${newImage.id}`);
        }

        // reset();
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
    };

    return (
        <section className="new-form-holder centered middled">
            <form className="createimage-form" onSubmit={handleSubmit}>
                <p className='s'>sssss</p>
                <input
                    type="text"
                    placeholder="Image url"
                    required
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Description"
                    required
                    value={content}
                    onChange={updateContent} />
                <button type="submit">Post new image</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

export default CreateImage;
