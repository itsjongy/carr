import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImage } from "../../store/image";
import './Image.css'

const Image = () => {
    const dispatch = useDispatch();
    const imageId = useParams();
    const imageObject = useSelector(state => state.imageState.entries);
    console.log("-------", imageObject)
    const image = imageObject[imageId.id];

    useEffect(() => {
        dispatch(getImage(imageId.id));
    }, [dispatch, imageId.id]);

    return (
        <div className="image-container">
            <div className="image-feed">
                <img className="image" src={image?.imageUrl} alt=''></img>
                <h3>{image?.User?.username}</h3>
                <p>{image?.content}</p>
            </div>
        </div>
    );
};

export default Image;
