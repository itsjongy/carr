import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateImage, deleteImage } from "../../store/image";
import image1 from './editpage.jpg';
import './EditImagePage.css'

const EditImage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const img = useSelector(state => state.imageState.entries);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const [imageUrl, setImageUrl] = useState(img.imageUrl);
    const [content, setContent] = useState(img.content);

    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedImage = {
            id: id,
            imageUrl,
            content
        };

        if (updatedImage) {
            const updateImg = await dispatch(updateImage(updatedImage));
            history.push(`/images/${updateImg.id}`);
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault();

        let deletedImage = {
            id: id,
            imageUrl,
            content
        };

        if (deletedImage) {
            const deleteId = await dispatch(deleteImage(id));
            if (deleteId) {
                history.push(`/images`);
            }
        };
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/images/${id}`);
    };

    let sesssionButton;
    if (sessionUser) {
        sesssionButton = (
            <div>
                <button className='edit-buttonpost' type="submit">Update Image</button>
                <button className='edit-buttondelete' type="submit" onClick={handleDelete}>Delete</button>
            </div>
        )
    } else {
        <></>
    }

    return (
        <div className="editform">
            <section className="edit-form-holder">
                <p className="a">Edit post</p>
                <form className="editimage-form" onSubmit={handleSubmit}>
                    <div className="edit-url">
                        <input
                            className="edit-imagebox"
                            type="text"
                            placeholder="Image Url"
                            value={imageUrl}
                            onChange={updateImageUrl} />
                    </div>
                    <div className='edit-description'>
                        <input
                            className='edit-descriptionbox'
                            type="text"
                            placeholder="Content"
                            value={content}
                            onChange={updateContent} />
                    </div>
                    <div className='edit-buttons'>
                        {sesssionButton}
                        <button className='edit-buttoncancel' type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </section>
            <div>
                <img className='edit-image' src={image1} alt=''></img>
            </div>
        </div>
    );
};

export default EditImage;
