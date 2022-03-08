import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/image";
import './Images.css'

const Images = () => {
    const dispatch = useDispatch();
    const imagesObj = useSelector(state => state.imageState.entries);
    const images = Object.values(imagesObj);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    return (
        <div>
            <p className="sasd">Images</p>
            {images.map(image => (
                <ul key={image.id}>
                    <img src={image.imageUrl} alt='image unavailable'/>
                </ul>
            ))}
        </div>
    )
}

export default Images;
