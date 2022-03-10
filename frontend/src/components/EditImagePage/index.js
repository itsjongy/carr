import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateImage, deleteImage } from "../../store/image";

const EditImage = () => {
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
            console.log("between dispatch and history.push -----------")
            if (deleteId) {
                history.push(`/images`);
            }
        };
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/images/${id}`);
    };

    return (
        <section className="edit-form-holder">
            <div>
                <p className="as">dfsdafsdfsafdsa</p>
                SDOINFDGSAINOAOSIDGNOIDSGNGDSIONGSDNIOK
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Image Url"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={updateContent} />
                <button type="submit">Update Image</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
                <button type="submit" onClick={handleDelete}>Delete</button>
            </form>
        </section>
    );
};

export default EditImage;
