import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { addImage } from "../../store/image";
import './CreateImagePage.css'
import image1 from './createpage.jpg';

const CreateImage = () => {
    const sessionUser = useSelector(state => state.session.user);
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
        <div className='createform'>
            <section className="new-form-holder">
                <p className='s'>Create new post</p>
                <form className="createimage-form" onSubmit={handleSubmit}>
                    <div className='create-url'>
                        <input
                            className='create-imagebox'
                            type="text"
                            placeholder="Image url"
                            required
                            value={imageUrl}
                            onChange={updateImageUrl} />
                    </div>
                    <div className='create-description'>
                        <input
                            className='create-descriptionbox'
                            type="text"
                            placeholder="Comment"
                            required
                            value={content}
                            onChange={updateContent} />
                    </div>
                    <div className='create-buttons'>
                        <button className='create-buttonpost' type="submit">Post new image</button>
                        <button className='create-buttoncancel' type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </section>
            <div>
                <img className='create-image' src={image1} alt=''></img>
            </div>
        </div>
    );
};

export default CreateImage;
