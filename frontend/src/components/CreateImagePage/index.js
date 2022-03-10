import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { addImage } from "../../store/image";

const CreateImage = () => {
    const sessionUser = useSelector(state => state.session.user);
    console.log("HAHAHAHAHAHHAHA", sessionUser)
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');

    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdImage = {
            userId: sessionUser.id,
            imageUrl,
            content
        };

        console.log("HEHEHEHEHEHEHEHEH", createdImage)

        if (createdImage) {
            const newImage = await dispatch(addImage(createdImage));
            history.push(`/images/${newImage.id}`);
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/images`);
    };

    return (
        <section className="new-form-holder centered middled">
            <p className='s'>sssss</p>
            <form className="createimage-form" onSubmit={handleSubmit}>
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
