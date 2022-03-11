import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getImage } from "../../store/image";
import Comments from "../Comments";
import './Image.css'

const Image = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const imageId = useParams();
    const imageObject = useSelector(state => state.imageState.entries);
    const image = imageObject[imageId.id];

    useEffect(() => {
        dispatch(getImage(imageId.id));
    }, [dispatch, imageId.id]);

    const handleEdit = (e) => {
        e.preventDefault();
        history.push(`/images/${image?.id}/edit`);
    }

    return (
        <div className="image-container">
            <div>
                <div className="image-feed">
                    <img className="image-image" src={image?.imageUrl} alt=''></img>
                </div>
                <div className="image-userinfo">
                    <div>
                        <h3>{image?.User?.username}</h3>
                    </div>
                    <div>
                        <p>{image?.content}</p>
                    </div>
                    <button className="image-edit" onClick={(e) => handleEdit(e)}>Edit</button>
                </div>
            </div>
            <div>
                <Comments image={image} />
            </div>
        </div>
    );
};

export default Image;
