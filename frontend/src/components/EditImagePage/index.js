import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "../../store/image";

const EditImage = ({ image, hideForm }) => {
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState(image.imageUrl);
    const [content, setContent] = useState(image.content);

    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...image,
            imageUrl,
            content
        };

        const updatedImage = await dispatch(updateImage(payload));
        if (updatedImage) {
            hideForm();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <section className="edit-form-holder">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Image Url"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Move 2"
                    value={content}
                    onChange={updateContent} />
                <button type="submit">Update Image</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

export default EditImage;
